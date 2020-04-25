import React from 'react';
import { PokemonOtInfo } from './index';
import { withKnobs, text, number, object } from '@storybook/addon-knobs';

export default {
  title: 'PokemonOtInfo',
  decorators: [withKnobs],
};

export const withContainer = () => (
  <div style={object('Container styles', { width: 400 })}>
    <PokemonOtInfo
      otName={text('otName', 'Test User')}
      tid={number('tid', 12345)}
      sid={number('sid', 12345)}
    />
  </div>
);
