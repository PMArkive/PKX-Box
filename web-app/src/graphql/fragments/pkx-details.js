import gql from "graphql-tag";

export const PKX_DETAILS_FRAGMENT = gql`
  fragment PKXDetails on PKXDocument {
    id
    pkx {
      Ability
      Ball
      EggMetDate
      EVs
      HeldItem
      IVs
      Language
      Met_Level
      MetDate
      Move1_PP
      Move1_PPUps
      Move2_PP
      Move2_PPUps
      Move3_PP
      Move3_PPUps
      Move4_PP
      Move4_PPUps
      Moves
      OT_Name
      RelearnMoves
      SID
      Species
      Stats
      TID
      TSV
      Version
      PersonalInfo {
        ATK
        DEF
        HP
        SPA
        SPD
        SPE
      }
    }
  }
`;
