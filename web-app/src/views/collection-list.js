import React from 'react';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import { MainLayout } from '../layouts/main';
import { GET_COLLECTION_PREVIEW } from '../graphql/queries/collection-names';
import { CollectionCard } from '../components/collection-card';
import { EditCollectionModal } from '../components/edit-collection-modal';
import { CREATE_COLLECTION } from '../graphql/mutations/create-collection';
import { GET_VIEWER_INFO } from '../graphql/queries/user';
import { createCollectionListRoute } from '../utils/routes';

const useStyles = makeStyles({
  fab: {
    position: 'fixed',
    bottom: '3rem',
    right: '3rem',
  },
});

const updateCollection = (updateQuery, collectionId, updatedCollection) => {
  updateQuery((previousResult) => {
    const collectionsCopy = previousResult?.user?.collections?.slice() || [];
    const foundIndex = collectionsCopy.findIndex(
      ({ id }) => id === collectionId,
    );
    const updatedIndex = foundIndex > -1 ? foundIndex : collectionsCopy.length;

    collectionsCopy[updatedIndex] = updatedCollection;
    const newCollections = collectionsCopy.filter(
      (collection) => collection !== null,
    );

    return {
      ...previousResult,
      user: {
        ...previousResult?.user,
        collections: newCollections,
      },
    };
  });
};

export const CollectionListView = ({ match }) => {
  const { data: user } = useQuery(GET_VIEWER_INFO);
  const loggedInUserId = user?.viewer?.user?.id || null;
  const userId = match.params.userId || loggedInUserId;
  const isLoggedIn = loggedInUserId !== null;
  const classes = useStyles();
  const [
    isCreateCollectionModalOpen,
    setIsCreateCollectionModalOpen,
  ] = React.useState(false);

  const closeCreateCollectionModel = () =>
    setIsCreateCollectionModalOpen(false);

  const openCreateCollectionModel = () => setIsCreateCollectionModalOpen(true);
  const { data, updateQuery, loading } = useQuery(GET_COLLECTION_PREVIEW, {
    variables: { userId },
    fetchPolicy: 'cache-and-network',
  });

  const onCollectionMutation = (collectionId, updatedCollection) =>
    updateCollection(updateQuery, collectionId, updatedCollection);

  const [createCollection] = useMutation(CREATE_COLLECTION, {
    onCompleted: ({ newCollection }) => {
      updateCollection(updateQuery, newCollection.id, newCollection);
      closeCreateCollectionModel();
    },
  });

  const onCreateCollection = ({ name, isPublic }) =>
    createCollection({ variables: { name, isPublic } });

  const fetchedUser = data?.user || {};
  const breadcrumbs = [
    {
      text: fetchedUser.fullDiscordName || 'User',
      href: createCollectionListRoute(userId),
    },
  ];

  return (
    <>
      <MainLayout loading={loading && !data} breadcrumbs={breadcrumbs}>
        <Grid container spacing={3}>
          {fetchedUser.collections?.map((collection) => {
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
