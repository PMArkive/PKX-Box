import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import { MainLayout } from '../layouts/main';
import { GET_COLLECTION } from '../graphql/queries/collection';
import { PokemonList } from '../components/pokemon-list';
import { DELETE_POKEMON } from '../graphql/mutations/delete-pokemon';
import { useToast } from '../components/toast';

const useStyles = makeStyles((theme) => ({
  content: {
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight + 10}px)`,
    width: '100vw',
  },
}));

export const CollectionView = ({ match }) => {
  const classes = useStyles();
  const { userId, collectionId } = match.params;
  const { data, updateQuery, loading } = useQuery(GET_COLLECTION, {
    variables: { userId, collectionId },
    fetchPolicy: 'cache-and-network',
  });
  const setToast = useToast();
  const [deletePokemon] = useMutation(DELETE_POKEMON, {
    onCompleted: ({ deletedPokemon }) => {
      updateQuery((previousResult) => {
        const user = previousResult?.user || {};
        const collection = user?.collection || {};
        const newPokemonList =
          collection?.pokemonList?.filter((pokemon) => pokemon.id !== deletedPokemon?.id) || [];

        return {
          ...previousResult,
          user: {
            ...user,
            collection: {
              ...collection,
              pokemonList: newPokemonList,
            },
          },
        };
      });
      setToast('Deleted PKX', 'success', true);
    },
    onError: () => {
      setToast('Error deleting PKX', 'error', true);
    },
  });
  const onDeletePokemon = (pokemonId) => deletePokemon({ variables: { collectionId, pokemonId } });
  const collection = data?.user?.collection || {};

  return (
    <MainLayout hasContentPadding={false} loading={loading}>
      <div className={classes.content}>
        <PokemonList
          ownerId={userId}
          collectionId={collectionId}
          isViewerOwner={collection.isViewerOwner}
          pokemonList={collection.pokemonList}
          onDeletePokemon={onDeletePokemon}
        />
      </div>
    </MainLayout>
  );
};
