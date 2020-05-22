import React from 'react';
import { TitleCard } from '../title-card';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { PokemonSprite } from '../pokemon-sprite';
import { UploadButton } from '../upload-button';
import { useMutation } from '@apollo/react-hooks';
import { UPLOAD_PKX } from '../../graphql/mutations/save-pkxs';
import { convertArrayBufferToBase64 } from '../../utils/convert-array-buffer-to-base-64';
import { UPDATE_COLLECTION } from '../../graphql/mutations/update-collection';
import { DELETE_COLLECTION } from '../../graphql/mutations/delete-collection';
import { EditCollectionModal } from '../edit-collection-modal';
import { createCollectionRoute } from '../../routes';
import { useToast } from '../toast';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { generalConfig } from '../../config';

const useStyles = makeStyles({
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CollectionCardActions = ({
  id,
  ownerId,
  isViewerOwner,
  onUploadPKX,
  onClickEdit,
}) => {
  const history = useHistory();
  const onClickView = () => history.push(createCollectionRoute(ownerId, id));
  const ownerButtons = isViewerOwner ? (
    <>
      <UploadButton id={`upload-${id}`} onUpload={onUploadPKX} multiple>
        <Button variant="outlined" color="primary">
          Upload PKX
        </Button>
      </UploadButton>
      <Button variant="outlined" color="primary" onClick={onClickEdit}>
        Edit
      </Button>
    </>
  ) : null;

  return (
    <>
      <Button
        component="a"
        variant="outlined"
        color="primary"
        onClick={onClickView}
      >
        View
      </Button>
      {ownerButtons}
    </>
  );
};

// Unconnected for Storybook
// In the future I might add apollo-storybook back
export const UnconnectedCollectionsCard = ({
  id,
  ownerId,
  isViewerOwner,
  isPublic,
  name,
  onUploadPKX,
  onUpdateCollection,
  onDeleteCollection,
  pokemonConnection,
  isEditMode,
  openEditMode,
  closeEditMode,
}) => {
  const cardTitle = isPublic ? name : `${name} (Private)`;
  const cardActions = (
    <CollectionCardActions
      id={id}
      ownerId={ownerId}
      isViewerOwner={isViewerOwner}
      onUploadPKX={onUploadPKX}
      onClickEdit={openEditMode}
    />
  );

  return (
    <>
      <EditCollectionModal
        open={isEditMode}
        onClose={closeEditMode}
        onSave={onUpdateCollection}
        onDelete={onDeleteCollection}
        isPublic={isPublic}
        collectionName={name}
        isDeleteable
      />
      <TitleCard title={cardTitle} cardActions={cardActions}>
        {pokemonConnection?.pokemonList?.map((pokemon) => (
          <PokemonSprite id={pokemon?.species} key={pokemon?.id} />
        ))}
      </TitleCard>
    </>
  );
};

export const CollectionCard = ({
  ownerId,
  collection,
  onCollectionMutation,
}) => {
  const collectionId = collection?.id;
  const classes = useStyles();
  const [isEditMode, setIsEditMode] = React.useState(false);
  const openEditMode = () => setIsEditMode(true);
  const closeEditMode = () => setIsEditMode(false);
  const setToast = useToast();
  const [uploadPKX, { loading: uploadPKXLoading }] = useMutation(UPLOAD_PKX, {
    onCompleted: ({ uploadBase64PKXs }) => {
      const pokemonConnection = collection?.pokemonConnection || {};
      const pokemonList = pokemonConnection.pokemonList || [];

      onCollectionMutation(collectionId, {
        ...collection,
        pokemonConnection: {
          ...pokemonConnection,
          pokemonList: [...pokemonList, ...uploadBase64PKXs].slice(
            0,
            generalConfig.collectionPreviewPokemonLimit,
          ),
        },
      });
      setToast('Uploaded PKX!', 'success', true);
    },
    onError: () => {
      setToast('Error uploading PKX', 'error', true);
    },
  });
  const onUploadPKX = (pkxs) =>
    uploadPKX({
      variables: {
        collectionId,
        pkxs: pkxs.map((pkx) => ({
          base64PKX: convertArrayBufferToBase64(pkx),
        })),
      },
    });
  const [updateCollection, { loading: updateCollectionLoading }] = useMutation(
    UPDATE_COLLECTION,
    {
      onCompleted: closeEditMode,
    },
  );
  const onUpdateCollection = ({ name, isPublic }) =>
    updateCollection({
      variables: {
        name,
        isPublic,
        id: collectionId,
      },
    });
  const [
    onDeleteCollection,
    { loading: deleteCollectionLoading },
  ] = useMutation(DELETE_COLLECTION, {
    variables: { collectionId },
    onCompleted: ({ deletedCollection }) => {
      onCollectionMutation(deletedCollection?.id, null);
      closeEditMode();
      setToast('Deleted collection', 'success', true);
    },
    onError: () => {
      setToast('Error deleting collection', 'error', true);
    },
  });
  const isLoading =
    uploadPKXLoading || updateCollectionLoading || deleteCollectionLoading;

  if (isLoading)
    return (
      <TitleCard>
        <div className={classes.spinnerContainer}>
          <CircularProgress />
        </div>
      </TitleCard>
    );

  return (
    <UnconnectedCollectionsCard
      ownerId={ownerId}
      onUploadPKX={onUploadPKX}
      onUpdateCollection={onUpdateCollection}
      onDeleteCollection={onDeleteCollection}
      isEditMode={isEditMode}
      openEditMode={openEditMode}
      closeEditMode={closeEditMode}
      {...collection}
    />
  );
};
