import React from 'react';
import { PokemonSprite } from './index';
import { withKnobs, number } from '@storybook/addon-knobs';

export default {
  title: 'PokemonSprite',
  decorators: [withKnobs],
};

export const withText = () => <PokemonSprite id={number('id', 1)} />;
