import React from 'react';
import { PokemonBall } from './index';
import { withKnobs, number } from '@storybook/addon-knobs';

export default {
  title: 'PokemonBall',
  decorators: [withKnobs],
};

export const withText = () => <PokemonBall id={number('id', 1)} />;
