import React from 'react';
import { PokemonOrigin } from './index';
import { withKnobs, number, object } from '@storybook/addon-knobs';

export default {
  title: 'PokemonOrigin',
  decorators: [withKnobs],
};

export const withContainer = () => (
  <div style={object('Container styles', { width: 400 })}>
    <PokemonOrigin
      metYear={number('metYear', 2020)}
      metMonth={number('metMonth', 1)}
      metDay={number('metDay', 24)}
      eggMetYear={number('eggMetYear', 2020)}
      eggMetMonth={number('eggMetMonth', 1)}
      eggMetDay={number('eggMetDay', 24)}
      language={number('language', 2)}
      version={number('version', 1)}
    />
  </div>
);
