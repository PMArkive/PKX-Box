import { gql } from 'apollo-server-express';

export const PKHEX_PROP_MAP = {
  Ability: 'ability',
  AbilityNumber: 'abilityNumber',
  AltForm: 'altForm',
  Ball: 'ball',
  CanGigantamax: 'canGigantamax',
  ChecksumValid: 'checksumValid',
  ConsoleRegion: 'consoleRegion',
  Country: 'country',
  CurrentLevel: 'currentLevel',
  DebutGeneration: 'debutGeneration',
  DisplaySID: 'displaySID',
  DisplayTID: 'displayTID',
  Egg_Day: 'eggDay',
  Egg_Month: 'eggMonth',
  Egg_Year: 'eggYear',
  EV_ATK: 'evATK',
  EV_DEF: 'evDEF',
  EV_HP: 'evHP',
  EV_SPA: 'evSPA',
  EV_SPD: 'evSPD',
  EV_SPE: 'evSPE',
  Gender: 'gender',
  GenNumber: 'genNumber',
  IsEgg: 'isEgg',
  IsLegal: 'verifiedLegal',
  IsShiny: 'isShiny',
  IV_ATK: 'ivATK',
  IV_DEF: 'ivDEF',
  IV_HP: 'ivHP',
  IV_SPA: 'ivSPA',
  IV_SPD: 'ivSPD',
  IV_SPE: 'ivSPE',
  Language: 'language',
  Met_Day: 'metDay',
  Met_Month: 'metMonth',
  Met_Year: 'metYear',
  Move1: 'move1',
  Move2: 'move2',
  Move3: 'move3',
  Move4: 'move4',
  OT_Name: 'otName',
  Region: 'region',
  Species: 'species',
  StatNature: 'statNature',
  Version: 'version',
  WasEgg: 'wasEgg',
};

export const PokemonType = gql`
  "Object representing a Pokemon.  Most of the structure is from PKHeX."
  type Pokemon {
    "An Id which can be used to reference the Pokemon."
    id: String
    ability: Int!
    abilityNumber: Int
    altForm: Int
    ball: Int!
    boxData: String
    canGigantamax: Boolean
    checksumValid: Boolean
    consoleRegion: Int
    country: Int
    currentLevel: Int
    debutGeneration: Int
    displaySID: Int
    displayTID: Int
    eggDay: Int
    eggMonth: Int
    eggYear: Int
    evATK: Int
    evDEF: Int
    evHP: Int
    evSPA: Int
    evSPD: Int
    evSPE: Int
    displayEvATK: String
    displayEvDEF: String
    displayEvHP: String
    displayEvSPA: String
    displayEvSPD: String
    displayEvSPE: String
    gender: Int
    genNumber: Int
    isEgg: Boolean
    verifiedLegal: Boolean
    isShiny: Boolean
    ivATK: Int
    ivDEF: Int
    ivHP: Int
    ivSPA: Int
    ivSPD: Int
    ivSPE: Int
    displayIvATK: String
    displayIvDEF: String
    displayIvHP: String
    displayIvSPA: String
    displayIvSPD: String
    displayIvSPE: String
    language: Int!
    metDay: Int
    metMonth: Int
    metYear: Int
    move1: Int!
    move2: Int!
    move3: Int!
    move4: Int!
    otName: String
    region: Int
    species: Int!
    statNature: Int!
    version: Int!
    wasEgg: Boolean
  }

  type PokemonConnection {
    cursor: String
    pokemonList: [Pokemon]
  }
`;
