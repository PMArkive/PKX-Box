import React from 'react';
import { PokemonItem } from './index';
import { withKnobs, number } from '@storybook/addon-knobs';

export default {
  title: 'PokemonItem',
  decorators: [withKnobs],
};

export const withText = () => <PokemonItem id={number('id', 1)} />;
