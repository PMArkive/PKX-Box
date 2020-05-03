import React from 'react';
import { PokemonList } from './index';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { reactRouterDecorator } from '../../../.storybook/decorators/react-router';

export default {
  title: 'PokemonList',
  decorators: [withKnobs, reactRouterDecorator],
};

const basePokemon = {
  id: '123456789',
  ability: 1,
  abilityNumber: 1,
  altForm: 0,
  ball: 4,
  canGigantamax: true,
  checksumValid: true,
  consoleRegion: 1,
  country: 1,
  currentLevel: 100,
  displaySID: 12345,
  displayTID: 12345,
  eggDay: 0,
  eggMonth: 0,
  eggYear: 0,
  EV_ATK: 0,
  EV_DEF: 0,
  EV_HP: 252,
  EV_SPA: 252,
  EV_SPD: 0,
  EV_SPE: 4,
  gender: 0,
  genNumber: 3,
  isEgg: false,
  isLegal: true,
  isShiny: true,
  IV_ATK: 31,
  IV_DEF: 31,
  IV_HP: 31,
  IV_SPA: 31,
  IV_SPD: 31,
  IV_SPE: 31,
  language: 1,
  metDay: 1,
  metMonth: 1,
  metYear: 20,
  move1: 10,
  move2: 20,
  move3: 30,
  move4: 40,
  otName: 'Test User',
  region: 1,
  species: 6,
  statNature: 1,
  version: 0,
  wasEgg: false,
};

export const withContent = () => {
  // We can't use hooks in a story without an enclosing component
  const Story = () => {
    const createPokemon = (count, offset) =>
      new Array(count)
        .fill(0)
        .map((_, index) => ({ ...basePokemon, species: index + offset }));
    const defaultPokemonList = createPokemon(50, 0);
    const [pokemonList, setPokemonList] = React.useState(defaultPokemonList);
    const addPokemonToList = ({ startIndex, stopIndex }) => {
      const count = stopIndex - startIndex;
      const newPokemon = createPokemon(count, pokemonList.length);
      setPokemonList([...pokemonList, ...newPokemon]);
    };

    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <PokemonList
          isViewerOwner={boolean('isViewerOwner', true)}
          collectionId={text('collectionId', '123456789')}
          isLoading={boolean('isLoading', false)}
          loadMoreRows={addPokemonToList}
          pokemonList={pokemonList}
          remoteRowCount={300}
          ownerId={text('userId', '123456789')}
        />
      </div>
    );
  };

  return <Story />;
};
