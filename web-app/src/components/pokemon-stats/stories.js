import React from 'react';
import { PokemonStats } from './index';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
  title: 'PokemonStats',
  decorators: [withKnobs],
};

export const withContainer = () => (
  <div style={object('Container styles', { width: 400 })}>
    <PokemonStats
      ivs={object('ivs', [31, 31, 31, 31, 31, 31])}
      evs={object('evs', [0, 0, 0, 0, 0, 0])}
    />
  </div>
);
