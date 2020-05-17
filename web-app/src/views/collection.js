import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import { MainLayout } from '../layouts/main';
import { GET_COLLECTION } from '../graphql/queries/collection';
import { PokemonList } from '../components/pokemon-list';
import { DELETE_POKEMON } from '../graphql/mutations/delete-pokemon';
import { useToast } from '../components/toast';
import { mergeWithArrays } from '../utils/merge-with-arrays';
import { createCollectionListRoute, createCollectionRoute } from '../routes';

const useStyles = makeStyles({
  content: {
    // Heights are from Material-UI - double all heights since there are two toolbars
    // 0.5rem is the second toolbar margin
    '@media (min-width:0px) and (orientation: landscape)': {
      height: 'calc(100vh - 96px - 0.5rem)', // 48 * 2 = 96
    },
    '@media (min-width:600px)': {
      height: 'calc(100vh - 128px - 0.5rem)', // 64 * 2 = 128
    },
    height: `calc(100vh - 112px - 0.5rem)`, // 56 * 2 = 112
    width: '100%',
  },
});

const PAGE_SIZE = 50;

export const CollectionView = ({ match }) => {
  const classes = useStyles();
  const setToast = useToast();
  // Keep track of cursors to avoid fetching the same data multiple times
  // PokemonLists's InfiniteLoader will fetch any time the user scrolls past a certain point
  const [cursorsUsed, setCursorsUsed] = React.useState(['']);
  const [collectionPokemonLimit, setCollectionPokemonLimit] = React.useState(
    // This ensures the infinite scroll assumes more data can be loaded by default
    // Without this, infinite scrolling won't know to load more data later
    PAGE_SIZE + 30,
  );

  const { data, updateQuery, loading, fetchMore } = useQuery(GET_COLLECTION, {
    variables: {
      userId: match.params.userId,
      collectionId: match.params.collectionId,
      first: PAGE_SIZE,
      after: '',
    },
    fetchPolicy: 'cache-and-network',
    onCompleted: ({ user }) => {
      const pokemonList =
        user?.collection?.pokemonConnection?.pokemonList || [];

      if (pokemonList.length < PAGE_SIZE)
        setCollectionPokemonLimit(pokemonList.length);
    },
  });
  const user = data?.user || {};
  const collection = user.collection || {};
  const currentCurosr = collection?.pokemonConnection?.cursor || '';

  const [deletePokemon] = useMutation(DELETE_POKEMON, {
    onCompleted: ({ deletedPokemon }) => {
      updateQuery((previousResult) => {
        const user = previousResult?.user || {};
        const collection = user.collection || {};
        const pokemonConnection = collection.pokemonConnection || {};
        const newPokemonList =
          pokemonConnection.pokemonList?.filter(
            (pokemon) => pokemon.id !== deletedPokemon?.id,
          ) || [];
        return {
          ...previousResult,
          user: {
            ...user,
            collection: {
              ...collection,
              pokemonConnection: {
                ...pokemonConnection,
                pokemonList: newPokemonList,
              },
            },
          },
        };
      });
      const newCollectionLimit =
        collectionPokemonLimit > 0 ? collectionPokemonLimit - 1 : 0;
      setCollectionPokemonLimit(newCollectionLimit);
      setToast('Deleted PKX', 'success', true);
    },
    onError: () => {
      setToast('Error deleting PKX', 'error', true);
    },
  });

  const onDeletePokemon = (pokemonId) =>
    deletePokemon({ variables: { collectionId: collection.id, pokemonId } });

  const loadMoreRows = () => {
    if (data && cursorsUsed.indexOf(currentCurosr) === -1) {
      setCursorsUsed([...cursorsUsed, currentCurosr]);
      fetchMore({
        query: GET_COLLECTION,
        variables: {
          userId: user.id,
          collectionId: collection.id,
          first: PAGE_SIZE,
          after: currentCurosr,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const oldPokemonList =
            previousResult?.user?.collection?.pokemonConnection?.pokemonList ||
            [];
          const newPokemonList =
            fetchMoreResult?.user?.collection?.pokemonConnection?.pokemonList ||
            [];
          const pokemonList = [...oldPokemonList, ...newPokemonList];
          const newCollectionLimit =
            newPokemonList.length < PAGE_SIZE
              ? pokemonList.length
              : collectionPokemonLimit + PAGE_SIZE;

          setCollectionPokemonLimit(newCollectionLimit);

          return mergeWithArrays(previousResult, fetchMoreResult);
        },
      });
    }
  };

  const breadcrumbs = loading
    ? null
    : [
        {
          text: user.fullDiscordName,
          href: createCollectionListRoute(user.id),
        },
        {
          text: collection.name,
          href: createCollectionRoute(user.id, collection.id),
        },
      ];

  return (
    <MainLayout hasContentPadding={false} breadcrumbs={breadcrumbs}>
      <div className={classes.content}>
        <PokemonList
          onDeletePokemon={onDeletePokemon}
          isViewerOwner={collection.isViewerOwner}
          pokemonList={collection.pokemonConnection?.pokemonList}
          collectionId={collection.id}
          ownerId={user.id}
          isLoading={loading}
          loadMoreRows={loadMoreRows}
          remoteRowCount={collectionPokemonLimit}
        />
      </div>
    </MainLayout>
  );
};
