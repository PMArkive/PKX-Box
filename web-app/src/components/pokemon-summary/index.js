import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { PokemonItem } from '../pokemon-item';
import { PokemonBall } from '../pokemon-ball';
import { PokemonSprite } from '../pokemon-sprite';
import { TitleCard } from '../title-card';

const useStyles = makeStyles({
  text: {
    marginTop: 12,
    marginBottom: 12,
  },
});

export const PokemonSummary = ({
  ability = 0,
  ball = 0,
  heldItem = 0,
  nature = 0,
  species = 0,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const abilityText = ability > -1 ? t(`abilities.${ability}`) : t('None');

  return (
    <TitleCard title={t(`species.${species}`)}>
      <PokemonSprite id={species} />
      <PokemonBall id={ball} />
      <PokemonItem id={heldItem} />
      <Typography variant="body2" component="p" className={classes.text}>
        {t(`natures.${nature}`)} - {abilityText}
      </Typography>
    </TitleCard>
  );
};
