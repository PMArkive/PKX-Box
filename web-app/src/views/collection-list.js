import React from 'react';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import { MainLayout } from '../layouts/main';
import { GET_COLLECTION_NAMES } from '../graphql/queries/collection-names';
import { CollectionCard } from '../components/collection-card';
import { EditCollectionModal } from '../components/edit-collection-modal';
import { CREATE_COLLECTION } from '../graphql/mutations/create-collection';
import { GET_USER_INFO } from '../graphql/queries/user';

const useStyles = makeStyles({
  fab: {
    position: 'fixed',
    bottom: '3rem',
    right: '3rem',
  },
});

const updateCollection = (updateQuery, collectionId, updatedCollection) => {
  updateQuery((previousResult) => {
    const newCollections = previousResult?.user?.collections?.slice() || [];
    const foundIndex = newCollections.findIndex(({ id }) => id === collectionId);
    const updatedIndex = foundIndex > -1 ? foundIndex : newCollections.length;

    newCollections[updatedIndex] = updatedCollection;

    return {
      ...previousResult,
      user: {
        ...previousResult?.user,
        collections: newCollections.filter((collection) => collection !== null),
      },
    };
  });
};

export const CollectionListView = ({ match }) => {
  const { data: user } = useQuery(GET_USER_INFO);
  const loggedInUserId = user?.viewer?.id || null;
  const isLoggedIn = loggedInUserId !== null;
  const { userId: parameterUserId } = match.params;
  const userId = parameterUserId || loggedInUserId;
  const classes = useStyles();
  const [isCreateCollectionModalOpen, setIsCreateCollectionModalOpen] = React.useState(false);
  const closeCreateCollectionModel = () => setIsCreateCollectionModalOpen(false);
  const openCreateCollectionModel = () => setIsCreateCollectionModalOpen(true);
  const { data, updateQuery, loading } = useQuery(GET_COLLECTION_NAMES, {
    variables: { userId },
  });
  const onCollectionMutation = (collectionId, updatedCollection) =>
    updateCollection(updateQuery, collectionId, updatedCollection);
  const [createCollection] = useMutation(CREATE_COLLECTION, {
    onCompleted: ({ newCollection }) => {
      updateCollection(updateQuery, newCollection.id, { ...newCollection, pokemonList: [] });
      closeCreateCollectionModel();
    },
  });
  const onCreateCollection = ({ name, isPublic }) =>
    createCollection({ variables: { name, isPublic } });

  return (
    <>
      <MainLayout loading={loading}>
        <Grid container spacing={3}>
          {data?.user?.collections?.map((collection) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={collection?.id}>
                <CollectionCard
                  ownerId={userId}
                  collection={collection}
                  onCollectionMutation={onCollectionMutation}
                />
              </Grid>
            );
          })}
        </Grid>
      </MainLayout>
      {isLoggedIn && (
        <Fab
          color="primary"
          aria-label="add-collection"
          className={classes.fab}
          onClick={openCreateCollectionModel}
        >
          <AddIcon />
        </Fab>
      )}
      <EditCollectionModal
        open={isCreateCollectionModalOpen}
        onClose={closeCreateCollectionModel}
        onSave={onCreateCollection}
      />
    </>
  );
};
