import React from 'react';
import { UnconnectedCollectionsCard as CollectionCard } from './index';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';

const reactRouterDecorator = (storyFn) => <BrowserRouter>{storyFn()}</BrowserRouter>;

export default {
  title: 'CollectionCard',
  decorators: [withKnobs, reactRouterDecorator],
};

export const withContent = () => {
  const pokemonList = [
    { species: 3 },
    { species: 3 },
    { species: 3 },
    { species: 6 },
    { species: 6 },
    { species: 6 },
    { species: 9 },
    { species: 9 },
    { species: 9 },
  ];

  return (
    <div style={object('Container styles', { width: 400 })}>
      <CollectionCard
        id={text('id', 'test')}
        closeEditMode={action('closeEditMode')}
        openEditMode={action('openEditMode')}
        isEditMode={boolean('isEditMode', false)}
        ownerId={text('ownerId', '123456789')}
        name={text('name', 'Collection Name')}
        isPublic={boolean('isPublic', false)}
        isViewerOwner={boolean('isViewerOwner', true)}
        pokemonList={object('pokemonList', pokemonList)}
        onUploadPKX={action('onUploadPKX')}
        onUpdateCollection={action('onUpdateCollection')}
        onDeleteCollection={action('onDeleteCollection')}
      />
    </div>
  );
};
