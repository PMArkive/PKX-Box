import React from 'react';
import { PokemonMoves } from './index';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
  title: 'PokemonMoves',
  decorators: [withKnobs],
};

export const withContainer = () => (
  <div style={object('Container styles', { width: 400 })}>
    <PokemonMoves moves={object('moves', [1, 24, 48, 87])} />
  </div>
);
