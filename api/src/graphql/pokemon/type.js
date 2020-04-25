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
  EV_ATK: 'EV_ATK',
  EV_DEF: 'EV_DEF',
  EV_HP: 'EV_HP',
  EV_SPA: 'EV_SPA',
  EV_SPD: 'EV_SPD',
  EV_SPE: 'EV_SPE',
  Gender: 'gender',
  GenNumber: 'genNumber',
  IsEgg: 'isEgg',
  IsLegal: 'isLegal',
  IsShiny: 'isShiny',
  IV_ATK: 'IV_ATK',
  IV_DEF: 'IV_DEF',
  IV_HP: 'IV_HP',
  IV_SPA: 'IV_SPA',
  IV_SPD: 'IV_SPD',
  IV_SPE: 'IV_SPE',
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
    ability: Int
    abilityNumber: Int
    altForm: Int
    ball: Int
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
    EV_ATK: Int
    EV_DEF: Int
    EV_HP: Int
    EV_SPA: Int
    EV_SPD: Int
    EV_SPE: Int
    gender: Int
    genNumber: Int
    isEgg: Boolean
    isLegal: Boolean
    isShiny: Boolean
    IV_ATK: Int
    IV_DEF: Int
    IV_HP: Int
    IV_SPA: Int
    IV_SPD: Int
    IV_SPE: Int
    language: Int
    metDay: Int
    metMonth: Int
    metYear: Int
    move1: Int
    move2: Int
    move3: Int
    move4: Int
    otName: String
    region: Int
    species: Int
    statNature: Int
    version: Int
    wasEgg: Boolean
  }
`;
