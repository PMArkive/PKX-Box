import gql from 'graphql-tag';

export const POKEMON_DETAILS_FRAGMENT_NAME = 'PokemonDetails';
export const POKEMON_DETAILS_FRAGMENT = gql`
  fragment ${POKEMON_DETAILS_FRAGMENT_NAME} on Pokemon {
    id
    species
    ball
    isShiny
    isEgg
    canGigantamax
    ability
    language
    move1
    move2
    move3
    move4
    gender
    currentLevel
    statNature
    IV_HP
    IV_ATK
    IV_DEF
    IV_SPA
    IV_SPD
    IV_SPE
    EV_HP
    EV_ATK
    EV_DEF
    EV_SPA
    EV_SPD
    EV_SPE
    isLegal
    metYear
    metMonth
    metDay
    eggYear
    eggMonth
    eggDay 
    version
    otName
    displayTID
    displaySID
    genNumber
  }
`;
