import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MainLayout } from '../layouts/main';
import { PokemonSummary } from '../components/pokemon-summary';
import { PokemonMoves } from '../components/pokemon-moves';
import { PokemonStats } from '../components/pokemon-stats';
import { PokemonOtInfo } from '../components/pokemon-ot-info';
import { PokemonOrigin } from '../components/pokemon-origin';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMON_DETAILS } from '../graphql/queries/pokemon-details';
import {
  createCollectionListRoute,
  createCollectionRoute,
  createPokemonRoute,
} from '../utils/routes';
import { useTranslation } from 'react-i18next';

export const PokemonView = ({ match }) => {
  const { userId, collectionId, pokemonId } = match.params;
  const { t } = useTranslation();
  const { data, loading } = useQuery(GET_POKEMON_DETAILS, {
    variables: { userId, collectionId, pokemonId },
  });
  const user = data?.user || {};
  const collection = user.collection || {};
  const {
    species,
    ability,
    statNature,
    evHP,
    evATK,
    evDEF,
    evSPE,
    evSPA,
    evSPD,
    move1,
    move2,
    move3,
    move4,
    ivHP,
    ivATK,
    ivDEF,
    ivSPE,
    ivSPA,
    ivSPD,
    version,
    language,
    otName,
    eggYear = 2020,
    eggMonth = 0,
    eggDay = 0,
    metYear = 2020,
    metMonth = 0,
    metDay = 0,
    ball,
    displayTID,
    displaySID,
  } = collection.pokemon || {};
  const ivs = [ivHP, ivATK, ivDEF, ivSPA, ivSPD, ivSPE];
  const evs = [evHP, evATK, evDEF, evSPA, evSPD, evSPE];
  const moves = [move1, move2, move3, move4];

  const breadcrumbs = loading
    ? null
    : [
        {
          text: user.fullDiscordName || 'User',
          href: createCollectionListRoute(userId),
        },
        {
          text: collection.name || 'Collection',
          href: createCollectionRoute(userId, collectionId),
        },
        {
          text: species ? t(`species.${species}`) : 'Pokemon',
          href: createPokemonRoute(userId, collectionId, pokemonId),
        },
      ];

  return (
    <MainLayout loading={loading && !data} breadcrumbs={breadcrumbs}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <PokemonSummary
            ability={ability}
            ball={ball}
            nature={statNature}
            species={species}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <PokemonOtInfo otName={otName} tid={displayTID} sid={displaySID} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <PokemonOrigin
            metYear={2000 + metYear}
            metMonth={metMonth}
            metDay={metDay}
            eggMetYear={2000 + eggYear}
            eggMetMonth={eggMonth}
            eggMetDay={eggDay}
            language={language}
            version={version}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <PokemonMoves moves={moves} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <PokemonStats ivs={ivs} evs={evs} />
        </Grid>
      </Grid>
    </MainLayout>
  );
};
