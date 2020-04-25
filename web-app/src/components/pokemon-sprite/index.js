import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { getPKMSprite } from '../../utils/get-sprite-url';
import { useTranslation } from 'react-i18next';

export const PokemonSprite = ({ id }) => {
  const { t } = useTranslation();

  if (id <= 0) return null;

  const pokemonName = t(`species.${id}`);
  const altText = `Pokemon - ${pokemonName}`;

  return (
    <Tooltip title={pokemonName}>
      <img src={getPKMSprite(id)} alt={altText} />
    </Tooltip>
  );
};
