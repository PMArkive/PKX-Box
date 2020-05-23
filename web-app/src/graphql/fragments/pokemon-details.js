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
    ivHP: displayIvHP
    ivATK: displayIvATK
    ivDEF: displayIvDEF
    ivSPA: displayIvSPA
    ivSPD: displayIvSPD
    ivSPE: displayIvSPE
    evHP: displayEvHP
    evATK: displayEvATK
    evDEF: displayEvDEF
    evSPA: displayEvSPA
    evSPD: displayEvSPD
    evSPE: displayEvSPE
    verifiedLegal
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
