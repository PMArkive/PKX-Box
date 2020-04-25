import React from 'react';
import { PokemonSummary } from './index';
import { withKnobs, number, object } from '@storybook/addon-knobs';

export default {
  title: 'PokemonSummary',
  decorators: [withKnobs],
};

export const withContainer = () => (
  <div style={object('Container styles', { width: 300 })}>
    <PokemonSummary
      ability={number('ability', 10)}
      ball={number('ball', 4)}
      heldItem={number('heldItem', 20)}
      ivs={object('ivs', [31, 31, 31, 31, 31, 31])}
      nature={number('nature', 1)}
      species={number('species', 1)}
    />
  </div>
);
