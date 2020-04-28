import React from 'react';
import { UserMenu } from './index';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { reactRouterDecorator } from '../../../.storybook/decorators/react-router';

export default {
  title: 'UserMenu',
  decorators: [withKnobs, reactRouterDecorator],
};

export const withContent = () => (
  <UserMenu
    displayName={text('displayName', 'testUser#1234')}
    onClickAccount={action('onClickAccount')}
    onClickLogout={action('onClickLogout')}
  />
);
