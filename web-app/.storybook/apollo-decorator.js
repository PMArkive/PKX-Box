import apolloStorybookDecorator from "apollo-storybook-react";
import gql from "graphql-tag";

const typeDefs = gql`
  type Mutation {
    _empty: String
    setPKXPrivacy(pkxId: String!, isPublic: Boolean!): Boolean!
    savePKXs(
      verifiedPKXs: [VerifiedPKX!]!
      collection: String = "Default"
      isPublic: Boolean = false
    ): [String!]!
    setCollectionPrivacy(collectionId: String!, isPublic: Boolean!): Boolean!
    saveCollection(collectionId: String!, pkxIds: [String!]!): Boolean!
  }

  type PersonalInfo {
    HP: Int
    ATK: Int
    DEF: Int
    SPE: Int
    SPA: Int
    SPD: Int
    Type1: Int
    Type2: Int
    CatchRate: Int
    EvoStage: Int
    EV_HP: Int
    EV_ATK: Int
    EV_DEF: Int
    EV_SPE: Int
    EV_SPA: Int
    EV_SPD: Int
    Item1: Int
    Item2: Int
    Item3: Int
    Gender: Int
    HatchCycles: Int
    BaseFriendship: Int
    EXPGrowth: Int
    EggGroup1: Int
    EggGroup2: Int
    Ability1: Int
    Ability2: Int
    AbilityH: Int
    EscapeRate: Int
    FormeSprite: Int
    FormeCount: Int
    Color: Int
    IsPresentInGame: Boolean
    SpriteForme: Boolean
    BaseEXP: Int
    Height: Int
    Weight: Int
    Species: Int
    BaseSpecies: Int
    BaseSpeciesForm: Int
    Flags: Int
    PokeDexIndex: Int
    FormIndex: Int
    IsDualGender: Boolean
    FixedGender: Int
    Genderless: Boolean
    OnlyFemale: Boolean
    OnlyMale: Boolean
    HasFormes: Boolean
    BST: Int
    SpecialTutors: [String]
    TypeTutors: [Boolean]
    TMHM: [Boolean]
    EggGroups: [Int]
    Types: [Int]
    Stats: [Int]
    Abilities: [Int]
    Items: [Int]
  }

  type PKX {
    Identifier: String
    Format: Int
    Data: String
    CurrentFriendship: Int
    OppositeFriendship: Int
    SIZE_PARTY: Int
    SIZE_STORED: Int
    Nickname_Trash: String
    HT_Trash: String
    OT_Trash: String
    WasLink: Boolean
    WasEvent: Boolean
    WasEventEgg: Boolean
    MaxIV: Int
    MaxEV: Int
    OTLength: Int
    NickLength: Int
    PSV: Int
    TSV: Int
    IsUntraded: Boolean
    Characteristic: Int
    EncryptionConstant: String
    Sanity: Int
    Checksum: Int
    Species: Int
    HeldItem: Int
    TID: Int
    SID: Int
    EXP: Int
    Ability: Int
    AbilityNumber: Int
    Favorite: Boolean
    CanGigantamax: Boolean
    MarkValue: Int
    PID: String
    Nature: Int
    StatNature: Int
    FatefulEncounter: Boolean
    Flag2: Boolean
    Gender: Int
    AltForm: Int
    EV_HP: Int
    EV_ATK: Int
    EV_DEF: Int
    EV_SPE: Int
    EV_SPA: Int
    EV_SPD: Int
    CNT_Cool: Int
    CNT_Beauty: Int
    CNT_Cute: Int
    CNT_Smart: Int
    CNT_Tough: Int
    CNT_Sheen: Int
    PKRS_Days: Int
    PKRS_Strain: Int
    RibbonChampionKalos: Boolean
    RibbonChampionG3Hoenn: Boolean
    RibbonChampionSinnoh: Boolean
    RibbonBestFriends: Boolean
    RibbonTraining: Boolean
    RibbonBattlerSkillful: Boolean
    RibbonBattlerExpert: Boolean
    RibbonEffort: Boolean
    RibbonAlert: Boolean
    RibbonShock: Boolean
    RibbonDowncast: Boolean
    RibbonCareless: Boolean
    RibbonRelax: Boolean
    RibbonSnooze: Boolean
    RibbonSmile: Boolean
    RibbonGorgeous: Boolean
    RibbonRoyal: Boolean
    RibbonGorgeousRoyal: Boolean
    RibbonArtist: Boolean
    RibbonFootprint: Boolean
    RibbonRecord: Boolean
    RibbonLegend: Boolean
    RibbonCountry: Boolean
    RibbonNational: Boolean
    RibbonEarth: Boolean
    RibbonWorld: Boolean
    RibbonClassic: Boolean
    RibbonPremier: Boolean
    RibbonEvent: Boolean
    RibbonBirthday: Boolean
    RibbonSpecial: Boolean
    RibbonSouvenir: Boolean
    RibbonWishing: Boolean
    RibbonChampionBattle: Boolean
    RibbonChampionRegional: Boolean
    RibbonChampionNational: Boolean
    RibbonChampionWorld: Boolean
    HasContestMemoryRibbon: Boolean
    HasBattleMemoryRibbon: Boolean
    RibbonChampionG6Hoenn: Boolean
    RibbonContestStar: Boolean
    RibbonMasterCoolness: Boolean
    RibbonMasterBeauty: Boolean
    RibbonMasterCuteness: Boolean
    RibbonMasterCleverness: Boolean
    RibbonMasterToughness: Boolean
    RibbonChampionAlola: Boolean
    RibbonBattleRoyale: Boolean
    RibbonBattleTreeGreat: Boolean
    RibbonBattleTreeMaster: Boolean
    RibbonChampionGalar: Boolean
    RibbonTowerMaster: Boolean
    RibbonMasterRank: Boolean
    RibbonMarkLunchtime: Boolean
    RibbonMarkSleepyTime: Boolean
    RibbonMarkDusk: Boolean
    RibbonMarkDawn: Boolean
    RibbonMarkCloudy: Boolean
    RibbonMarkRainy: Boolean
    RibbonMarkStormy: Boolean
    RibbonMarkSnowy: Boolean
    RibbonMarkBlizzard: Boolean
    RibbonMarkDry: Boolean
    RibbonMarkSandstorm: Boolean
    RibbonCountMemoryContest: Int
    RibbonCountMemoryBattle: Int
    RibbonMarkMisty: Boolean
    RibbonMarkDestiny: Boolean
    RibbonMarkFishing: Boolean
    RibbonMarkCurry: Boolean
    RibbonMarkUncommon: Boolean
    RibbonMarkRare: Boolean
    RibbonMarkRowdy: Boolean
    RibbonMarkAbsentMinded: Boolean
    RibbonMarkJittery: Boolean
    RibbonMarkExcited: Boolean
    RibbonMarkCharismatic: Boolean
    RibbonMarkCalmness: Boolean
    RibbonMarkIntense: Boolean
    RibbonMarkZonedOut: Boolean
    RibbonMarkJoyful: Boolean
    RibbonMarkAngry: Boolean
    RibbonMarkSmiley: Boolean
    RibbonMarkTeary: Boolean
    RibbonMarkUpbeat: Boolean
    RibbonMarkPeeved: Boolean
    RibbonMarkIntellectual: Boolean
    RibbonMarkFerocious: Boolean
    RibbonMarkCrafty: Boolean
    RibbonMarkScowling: Boolean
    RibbonMarkKindly: Boolean
    RibbonMarkFlustered: Boolean
    RibbonMarkPumpedUp: Boolean
    RibbonMarkZeroEnergy: Boolean
    RibbonMarkPrideful: Boolean
    RibbonMarkUnsure: Boolean
    RibbonMarkHumble: Boolean
    RibbonMarkThorny: Boolean
    RibbonMarkVigor: Boolean
    RibbonMarkSlump: Boolean
    RIB44_2: Boolean
    RIB44_3: Boolean
    RIB44_4: Boolean
    RIB44_5: Boolean
    RIB44_6: Boolean
    RIB44_7: Boolean
    RIB45_0: Boolean
    RIB45_1: Boolean
    RIB45_2: Boolean
    RIB45_3: Boolean
    RIB45_4: Boolean
    RIB45_5: Boolean
    RIB45_6: Boolean
    RIB45_7: Boolean
    RIB46_0: Boolean
    RIB46_1: Boolean
    RIB46_2: Boolean
    RIB46_3: Boolean
    RIB46_4: Boolean
    RIB46_5: Boolean
    RIB46_6: Boolean
    RIB46_7: Boolean
    RIB47_0: Boolean
    RIB47_1: Boolean
    RIB47_2: Boolean
    RIB47_3: Boolean
    RIB47_4: Boolean
    RIB47_5: Boolean
    RIB47_6: Boolean
    RIB47_7: Boolean
    U48: Int
    HeightScalar: Int
    WeightScalar: Int
    Nickname: String
    Move1: Int
    Move2: Int
    Move3: Int
    Move4: Int
    Move1_PP: Int
    Move2_PP: Int
    Move3_PP: Int
    Move4_PP: Int
    Move1_PPUps: Int
    Move2_PPUps: Int
    Move3_PPUps: Int
    Move4_PPUps: Int
    RelearnMove1: Int
    RelearnMove2: Int
    RelearnMove3: Int
    RelearnMove4: Int
    Stat_HPCurrent: Int
    IV_HP: Int
    IV_ATK: Int
    IV_DEF: Int
    IV_SPE: Int
    IV_SPA: Int
    IV_SPD: Int
    IsEgg: Boolean
    IsNicknamed: Boolean
    DynamaxLevel: Int
    Status_Condition: Int
    Unk98: Int
    HT_Name: String
    HT_Gender: Int
    HT_Language: Int
    CurrentHandler: Int
    HT_TrainerID: Int
    HT_Friendship: Int
    HT_Intensity: Int
    HT_Memory: Int
    HT_Feeling: Int
    HT_TextVar: Int
    Fullness: Int
    Enjoyment: Int
    Version: Int
    Country: Int
    Region: Int
    ConsoleRegion: Int
    Language: Int
    UnkE3: Int
    FormArgument: Int
    AffixedRibbon: Int
    OT_Name: String
    OT_Friendship: Int
    OT_Intensity: Int
    OT_Memory: Int
    OT_TextVar: Int
    OT_Feeling: Int
    Egg_Year: Int
    Egg_Month: Int
    Egg_Day: Int
    Met_Year: Int
    Met_Month: Int
    Met_Day: Int
    Egg_Location: Int
    Met_Location: Int
    Ball: Int
    Met_Level: Int
    OT_Gender: Int
    HyperTrainFlags: Int
    HT_HP: Boolean
    HT_ATK: Boolean
    HT_DEF: Boolean
    HT_SPA: Boolean
    HT_SPD: Boolean
    HT_SPE: Boolean
    Stat_Level: Int
    Stat_HPMax: Int
    Stat_ATK: Int
    Stat_DEF: Int
    Stat_SPE: Int
    Stat_SPA: Int
    Stat_SPD: Int
    DynamaxType: Int
    MaxMoveID: Int
    MaxSpeciesID: Int
    MaxAbilityID: Int
    MaxItemID: Int
    MaxBallID: Int
    MaxGameID: Int
    Extension: String
    Box: Int
    Slot: Int
    EncryptedPartyData: String
    EncryptedBoxData: String
    DecryptedPartyData: String
    DecryptedBoxData: String
    Valid: Boolean
    Japanese: Boolean
    Korean: Boolean
    Chinese: Boolean
    HT_Affection: Int
    MetDate: String
    EggMetDate: String
    OT_Affection: Int
    EncounterType: Int
    MinGameID: Int
    SpecForm: Int
    SpriteItem: Int
    IsShiny: Boolean
    StorageFlags: Int
    Locked: Boolean
    TrainerID7: Int
    TrainerSID7: Int
    ShinyXor: Int
    DisplayTID: Int
    DisplaySID: Int
    E: Boolean
    FRLG: Boolean
    Pt: Boolean
    HGSS: Boolean
    BW: Boolean
    B2W2: Boolean
    XY: Boolean
    AO: Boolean
    SM: Boolean
    USUM: Boolean
    GO: Boolean
    VC1: Boolean
    VC2: Boolean
    GG: Boolean
    SWSH: Boolean
    VC: Boolean
    Gen8: Boolean
    Gen7: Boolean
    Gen6: Boolean
    Gen5: Boolean
    Gen4: Boolean
    Gen3: Boolean
    Gen2: Boolean
    Gen1: Boolean
    GenU: Boolean
    GenNumber: Int
    DebutGeneration: Int
    PKRS_Infected: Boolean
    PKRS_Cured: Boolean
    ChecksumValid: Boolean
    CurrentLevel: Int
    MarkCircle: Int
    MarkTriangle: Int
    MarkSquare: Int
    MarkHeart: Int
    MarkStar: Int
    MarkDiamond: Int
    IVTotal: Int
    EVTotal: Int
    MaximumIV: Int
    FlawlessIVCount: Int
    FileName: String
    FileNameWithoutExtension: String
    PIDAbility: Int
    HPPower: Int
    HPType: Int
    TradebackStatus: Int
    Gen1_NotTradeback: Boolean
    Gen2_NotTradeback: Boolean
    WasEgg: Boolean
    WasBredEgg: Boolean
    WasGiftEgg: Boolean
    WasTradedEgg: Boolean
    IsTradedEgg: Boolean
    IsNative: Boolean
    IsOriginValid: Boolean
    HasOriginalMetLocation: Boolean
    PotentialRating: Int
    PartyStatsPresent: Boolean
    IsLegal: Boolean
    RelearnMoves: [Int]
    Moves: [Int]
    Stats: [Int]
    EVs: [Int]
    IVs: [Int]
    Markings: [Int]
    PersonalInfo: PersonalInfo
    ExtraBytes: [Int]
    isPublic: Boolean
    collection: String
  }

  type PKXDocument {
    id: String
    pkx: PKX
  }

  type Query {
    _empty: String
    pkx(userId: String!, pkxId: String!): PKXDocument
    pkxList(userId: String): [PKXDocument]!
    collection(userId: String, collectionId: String!): [PKXDocument]!
    collectionNames(userId: String): [String!]!
    username: String!
  }

  input VerifiedPKX {
    pkx: String!
    signature: String!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

const pkxList = [
  {
    pkx: {
      PersonalInfo: {
        HP: 1,
        ATK: 90,
        DEF: 45,
        SPE: 40,
        SPA: 30,
        SPD: 30,
        Type1: 6,
        Type2: 7,
        CatchRate: 45,
        EvoStage: 2,
        EV_HP: 2,
        EV_ATK: 0,
        EV_DEF: 0,
        EV_SPE: 0,
        EV_SPA: 0,
        EV_SPD: 0,
        Item1: 0,
        Item2: 0,
        Item3: 0,
        Gender: 255,
        HatchCycles: 15,
        BaseFriendship: 50,
        EXPGrowth: 1,
        EggGroup1: 10,
        EggGroup2: 10,
        Ability1: 25,
        Ability2: 25,
        AbilityH: 25,
        EscapeRate: 0,
        FormeSprite: 0,
        FormeCount: 1,
        Color: 5,
        IsPresentInGame: true,
        SpriteForme: false,
        BaseEXP: 83,
        Height: 80,
        Weight: 12,
        Species: 292,
        BaseSpecies: 290,
        BaseSpeciesForm: 0,
        Flags: 0,
        PokeDexIndex: 106,
        FormIndex: 0,
        IsDualGender: false,
        FixedGender: 2,
        Genderless: true,
        OnlyFemale: false,
        OnlyMale: false,
        HasFormes: false,
        BST: 236,
        SpecialTutors: [],
        TypeTutors: [false, false, false, false, false, false, false, false],
        TMHM: [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          true,
          false,
          true,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          true,
          true,
          true,
          false,
          false,
          true,
          false,
          false,
          false,
          true,
          false,
          true,
          false,
          false,
          false,
          true,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          true,
          true,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false
        ],
        EggGroups: [10, 10],
        Types: [6, 7],
        Stats: [1, 90, 45, 40, 30, 30],
        Abilities: [25, 25, 25],
        Items: [0, 0, 0]
      },
      Identifier: null,
      Format: 8,
      Data: "test",
      CurrentFriendship: 183,
      OppositeFriendship: 0,
      SIZE_PARTY: 344,
      SIZE_STORED: 328,
      Nickname_Trash: "UwBoAGUAZABpAG4AagBhAAAAAAAAAAAA",
      HT_Trash: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      OT_Trash: "WgBhAGsAAAAAAAAAAAAAAAAAAAAAAAAA",
      WasLink: false,
      WasEvent: false,
      WasEventEgg: false,
      MaxIV: 31,
      MaxEV: 252,
      OTLength: 12,
      NickLength: 12,
      PSV: 974,
      TSV: 2025,
      IsUntraded: true,
      Characteristic: 26,
      EncryptionConstant: "123456789",
      Sanity: 0,
      Checksum: 49048,
      Species: 292,
      HeldItem: 0,
      TID: 998,
      SID: 32114,
      EXP: 600000,
      Ability: 25,
      AbilityNumber: 2,
      Favorite: false,
      CanGigantamax: false,
      MarkValue: 0,
      PID: "123456789",
      Nature: 7,
      StatNature: 7,
      FatefulEncounter: false,
      Flag2: false,
      Gender: 2,
      AltForm: 0,
      EV_HP: 7,
      EV_ATK: 49,
      EV_DEF: 49,
      EV_SPE: 21,
      EV_SPA: 43,
      EV_SPD: 20,
      CNT_Cool: 0,
      CNT_Beauty: 0,
      CNT_Cute: 0,
      CNT_Smart: 0,
      CNT_Tough: 0,
      CNT_Sheen: 0,
      PKRS_Days: 0,
      PKRS_Strain: 0,
      RibbonChampionKalos: false,
      RibbonChampionG3Hoenn: false,
      RibbonChampionSinnoh: false,
      RibbonBestFriends: false,
      RibbonTraining: false,
      RibbonBattlerSkillful: false,
      RibbonBattlerExpert: false,
      RibbonEffort: false,
      RibbonAlert: false,
      RibbonShock: false,
      RibbonDowncast: false,
      RibbonCareless: false,
      RibbonRelax: false,
      RibbonSnooze: false,
      RibbonSmile: false,
      RibbonGorgeous: false,
      RibbonRoyal: false,
      RibbonGorgeousRoyal: false,
      RibbonArtist: false,
      RibbonFootprint: false,
      RibbonRecord: false,
      RibbonLegend: false,
      RibbonCountry: false,
      RibbonNational: false,
      RibbonEarth: false,
      RibbonWorld: false,
      RibbonClassic: false,
      RibbonPremier: false,
      RibbonEvent: false,
      RibbonBirthday: false,
      RibbonSpecial: false,
      RibbonSouvenir: false,
      RibbonWishing: false,
      RibbonChampionBattle: false,
      RibbonChampionRegional: false,
      RibbonChampionNational: false,
      RibbonChampionWorld: false,
      HasContestMemoryRibbon: false,
      HasBattleMemoryRibbon: false,
      RibbonChampionG6Hoenn: false,
      RibbonContestStar: false,
      RibbonMasterCoolness: false,
      RibbonMasterBeauty: false,
      RibbonMasterCuteness: false,
      RibbonMasterCleverness: false,
      RibbonMasterToughness: false,
      RibbonChampionAlola: false,
      RibbonBattleRoyale: false,
      RibbonBattleTreeGreat: false,
      RibbonBattleTreeMaster: false,
      RibbonChampionGalar: true,
      RibbonTowerMaster: false,
      RibbonMasterRank: false,
      RibbonMarkLunchtime: false,
      RibbonMarkSleepyTime: false,
      RibbonMarkDusk: false,
      RibbonMarkDawn: false,
      RibbonMarkCloudy: false,
      RibbonMarkRainy: false,
      RibbonMarkStormy: false,
      RibbonMarkSnowy: false,
      RibbonMarkBlizzard: false,
      RibbonMarkDry: false,
      RibbonMarkSandstorm: false,
      RibbonCountMemoryContest: 0,
      RibbonCountMemoryBattle: 0,
      RibbonMarkMisty: false,
      RibbonMarkDestiny: false,
      RibbonMarkFishing: false,
      RibbonMarkCurry: false,
      RibbonMarkUncommon: false,
      RibbonMarkRare: false,
      RibbonMarkRowdy: false,
      RibbonMarkAbsentMinded: false,
      RibbonMarkJittery: false,
      RibbonMarkExcited: false,
      RibbonMarkCharismatic: false,
      RibbonMarkCalmness: false,
      RibbonMarkIntense: false,
      RibbonMarkZonedOut: false,
      RibbonMarkJoyful: false,
      RibbonMarkAngry: false,
      RibbonMarkSmiley: false,
      RibbonMarkTeary: false,
      RibbonMarkUpbeat: false,
      RibbonMarkPeeved: false,
      RibbonMarkIntellectual: false,
      RibbonMarkFerocious: false,
      RibbonMarkCrafty: false,
      RibbonMarkScowling: false,
      RibbonMarkKindly: false,
      RibbonMarkFlustered: false,
      RibbonMarkPumpedUp: false,
      RibbonMarkZeroEnergy: false,
      RibbonMarkPrideful: false,
      RibbonMarkUnsure: false,
      RibbonMarkHumble: false,
      RibbonMarkThorny: false,
      RibbonMarkVigor: false,
      RibbonMarkSlump: false,
      RIB44_2: false,
      RIB44_3: false,
      RIB44_4: false,
      RIB44_5: false,
      RIB44_6: false,
      RIB44_7: false,
      RIB45_0: false,
      RIB45_1: false,
      RIB45_2: false,
      RIB45_3: false,
      RIB45_4: false,
      RIB45_5: false,
      RIB45_6: false,
      RIB45_7: false,
      RIB46_0: false,
      RIB46_1: false,
      RIB46_2: false,
      RIB46_3: false,
      RIB46_4: false,
      RIB46_5: false,
      RIB46_6: false,
      RIB46_7: false,
      RIB47_0: false,
      RIB47_1: false,
      RIB47_2: false,
      RIB47_3: false,
      RIB47_4: false,
      RIB47_5: false,
      RIB47_6: false,
      RIB47_7: false,
      U48: 10,
      HeightScalar: 185,
      WeightScalar: 98,
      Nickname: "Shedinja",
      Move1: 232,
      Move2: 91,
      Move3: 189,
      Move4: 421,
      Move1_PP: 35,
      Move2_PP: 10,
      Move3_PP: 10,
      Move4_PP: 15,
      Move1_PPUps: 0,
      Move2_PPUps: 0,
      Move3_PPUps: 0,
      Move4_PPUps: 0,
      RelearnMove1: 28,
      RelearnMove2: 10,
      RelearnMove3: 0,
      RelearnMove4: 0,
      Stat_HPCurrent: 1,
      IV_HP: 31,
      IV_ATK: 31,
      IV_DEF: 31,
      IV_SPE: 31,
      IV_SPA: 31,
      IV_SPD: 31,
      IsEgg: false,
      IsNicknamed: false,
      DynamaxLevel: 10,
      Status_Condition: 0,
      Unk98: 0,
      HT_Name: "",
      HT_Gender: 0,
      HT_Language: 0,
      CurrentHandler: 0,
      HT_TrainerID: 0,
      HT_Friendship: 0,
      HT_Intensity: 0,
      HT_Memory: 0,
      HT_Feeling: 0,
      HT_TextVar: 0,
      Fullness: 0,
      Enjoyment: 0,
      Version: 45,
      Country: 0,
      Region: 0,
      ConsoleRegion: 0,
      Language: 2,
      UnkE3: 0,
      FormArgument: 0,
      AffixedRibbon: -1,
      OT_Name: "Zak",
      OT_Friendship: 183,
      OT_Intensity: 6,
      OT_Memory: 29,
      OT_TextVar: 890,
      OT_Feeling: 4,
      Egg_Year: 19,
      Egg_Month: 12,
      Egg_Day: 22,
      Met_Year: 19,
      Met_Month: 12,
      Met_Day: 22,
      Egg_Location: 60002,
      Met_Location: 142,
      Ball: 4,
      Met_Level: 1,
      OT_Gender: 0,
      HyperTrainFlags: 0,
      HT_HP: false,
      HT_ATK: false,
      HT_DEF: false,
      HT_SPA: false,
      HT_SPD: false,
      HT_SPE: false,
      Stat_Level: 100,
      Stat_HPMax: 1,
      Stat_ATK: 228,
      Stat_DEF: 151,
      Stat_SPE: 108,
      Stat_SPA: 106,
      Stat_SPD: 101,
      DynamaxType: 0,
      MaxMoveID: 796,
      MaxSpeciesID: 890,
      MaxAbilityID: 258,
      MaxItemID: 1278,
      MaxBallID: 26,
      MaxGameID: 45,
      Extension: "pk8",
      Box: -1,
      Slot: -1,
      EncryptedPartyData: "test",
      EncryptedBoxData: "test",
      DecryptedPartyData: "test",
      DecryptedBoxData: "test",
      Valid: true,
      Japanese: false,
      Korean: false,
      Chinese: false,
      HT_Affection: 0,
      MetDate: "2019-12-22T00:00:00",
      EggMetDate: "2019-12-22T00:00:00",
      OT_Affection: 0,
      EncounterType: 0,
      MinGameID: 0,
      SpecForm: 292,
      SpriteItem: 0,
      IsShiny: false,
      StorageFlags: 0,
      Locked: false,
      TrainerID7: 624102,
      TrainerSID7: 2104,
      ShinyXor: 17013,
      DisplayTID: 624102,
      DisplaySID: 2104,
      E: false,
      FRLG: false,
      Pt: false,
      HGSS: false,
      BW: false,
      B2W2: false,
      XY: false,
      AO: false,
      SM: false,
      USUM: false,
      GO: false,
      VC1: false,
      VC2: false,
      GG: false,
      SWSH: true,
      VC: false,
      Gen8: true,
      Gen7: false,
      Gen6: false,
      Gen5: false,
      Gen4: false,
      Gen3: false,
      Gen2: false,
      Gen1: false,
      GenU: false,
      GenNumber: 8,
      DebutGeneration: 3,
      PKRS_Infected: false,
      PKRS_Cured: false,
      ChecksumValid: true,
      CurrentLevel: 100,
      MarkCircle: 0,
      MarkTriangle: 0,
      MarkSquare: 0,
      MarkHeart: 0,
      MarkStar: 0,
      MarkDiamond: 0,
      IVTotal: 186,
      EVTotal: 189,
      MaximumIV: 31,
      FlawlessIVCount: 6,
      FileName: "292 - Shedinja.pk8",
      FileNameWithoutExtension: "292 - Shedinja",
      PIDAbility: -1,
      HPPower: 60,
      HPType: 15,
      TradebackStatus: 0,
      Gen1_NotTradeback: false,
      Gen2_NotTradeback: false,
      WasEgg: true,
      WasBredEgg: true,
      WasGiftEgg: false,
      WasTradedEgg: false,
      IsTradedEgg: false,
      IsNative: true,
      IsOriginValid: true,
      HasOriginalMetLocation: true,
      PotentialRating: 3,
      PartyStatsPresent: true,
      IsLegal: true,
      RelearnMoves: [28, 10, 0, 0],
      Moves: [232, 91, 189, 421],
      Stats: [1, 228, 151, 108, 106, 101],
      EVs: [7, 49, 49, 21, 43, 20],
      IVs: [31, 31, 31, 31, 31, 31],
      Markings: [0, 0, 0, 0, 0, 0, 0, 0],
      ExtraBytes: [23, 26, 27, 35, 51, 62, 63, 197, 277, 287],
      isPublic: false
    }
  },
  {
    pkx: {
      PersonalInfo: {
        HP: 0,
        ATK: 0,
        DEF: 0,
        SPE: 0,
        SPA: 0,
        SPD: 0,
        Type1: 0,
        Type2: 0,
        CatchRate: 0,
        EvoStage: 0,
        EV_HP: 0,
        EV_ATK: 0,
        EV_DEF: 0,
        EV_SPE: 0,
        EV_SPA: 0,
        EV_SPD: 0,
        Item1: 0,
        Item2: 0,
        Item3: 0,
        Gender: 255,
        HatchCycles: 0,
        BaseFriendship: 0,
        EXPGrowth: 0,
        EggGroup1: 0,
        EggGroup2: 0,
        Ability1: 0,
        Ability2: 0,
        AbilityH: 0,
        EscapeRate: 0,
        FormeSprite: 0,
        FormeCount: 0,
        Color: 0,
        IsPresentInGame: false,
        SpriteForme: false,
        BaseEXP: 0,
        Height: 0,
        Weight: 0,
        Species: 0,
        BaseSpecies: 0,
        BaseSpeciesForm: 0,
        Flags: 0,
        PokeDexIndex: 0,
        FormIndex: 0,
        IsDualGender: false,
        FixedGender: 2,
        Genderless: true,
        OnlyFemale: false,
        OnlyMale: false,
        HasFormes: false,
        BST: 0,
        SpecialTutors: [],
        TypeTutors: [false, false, false, false, false, false, false, false],
        TMHM: [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false
        ],
        EggGroups: [0, 0],
        Types: [0, 0],
        Stats: [0, 0, 0, 0, 0, 0],
        Abilities: [0, 0, 0],
        Items: [0, 0, 0]
      },
      Identifier: null,
      Format: 8,
      Data: "test",
      CurrentFriendship: 121,
      OppositeFriendship: 0,
      SIZE_PARTY: 344,
      SIZE_STORED: 328,
      Nickname_Trash: "WgB5AGcAYQByAGQAZQAAAAAAAAAAAAAA",
      HT_Trash: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      OT_Trash: "WgBhAGsAAAAAAAAAAAAAAAAAAAAAAAAA",
      WasLink: false,
      WasEvent: false,
      WasEventEgg: false,
      MaxIV: 31,
      MaxEV: 252,
      OTLength: 12,
      NickLength: 12,
      PSV: 1099,
      TSV: 2025,
      IsUntraded: true,
      Characteristic: 13,
      EncryptionConstant: "123456789",
      Sanity: 0,
      Checksum: 14799,
      Species: 718,
      HeldItem: 0,
      TID: 998,
      SID: 32114,
      EXP: 79507,
      Ability: 0,
      AbilityNumber: 2,
      Favorite: false,
      CanGigantamax: false,
      MarkValue: 0,
      PID: "123456789",
      Nature: 1,
      StatNature: 1,
      FatefulEncounter: false,
      Flag2: false,
      Gender: 2,
      AltForm: 0,
      EV_HP: 8,
      EV_ATK: 23,
      EV_DEF: 21,
      EV_SPE: 11,
      EV_SPA: 4,
      EV_SPD: 13,
      CNT_Cool: 0,
      CNT_Beauty: 0,
      CNT_Cute: 0,
      CNT_Smart: 0,
      CNT_Tough: 0,
      CNT_Sheen: 0,
      PKRS_Days: 0,
      PKRS_Strain: 0,
      RibbonChampionKalos: false,
      RibbonChampionG3Hoenn: false,
      RibbonChampionSinnoh: false,
      RibbonBestFriends: false,
      RibbonTraining: false,
      RibbonBattlerSkillful: false,
      RibbonBattlerExpert: false,
      RibbonEffort: false,
      RibbonAlert: false,
      RibbonShock: false,
      RibbonDowncast: false,
      RibbonCareless: false,
      RibbonRelax: false,
      RibbonSnooze: false,
      RibbonSmile: false,
      RibbonGorgeous: false,
      RibbonRoyal: false,
      RibbonGorgeousRoyal: false,
      RibbonArtist: false,
      RibbonFootprint: false,
      RibbonRecord: false,
      RibbonLegend: false,
      RibbonCountry: false,
      RibbonNational: false,
      RibbonEarth: false,
      RibbonWorld: false,
      RibbonClassic: false,
      RibbonPremier: false,
      RibbonEvent: false,
      RibbonBirthday: false,
      RibbonSpecial: false,
      RibbonSouvenir: false,
      RibbonWishing: false,
      RibbonChampionBattle: false,
      RibbonChampionRegional: false,
      RibbonChampionNational: false,
      RibbonChampionWorld: false,
      HasContestMemoryRibbon: false,
      HasBattleMemoryRibbon: false,
      RibbonChampionG6Hoenn: false,
      RibbonContestStar: false,
      RibbonMasterCoolness: false,
      RibbonMasterBeauty: false,
      RibbonMasterCuteness: false,
      RibbonMasterCleverness: false,
      RibbonMasterToughness: false,
      RibbonChampionAlola: false,
      RibbonBattleRoyale: false,
      RibbonBattleTreeGreat: false,
      RibbonBattleTreeMaster: false,
      RibbonChampionGalar: false,
      RibbonTowerMaster: false,
      RibbonMasterRank: false,
      RibbonMarkLunchtime: false,
      RibbonMarkSleepyTime: false,
      RibbonMarkDusk: false,
      RibbonMarkDawn: false,
      RibbonMarkCloudy: false,
      RibbonMarkRainy: false,
      RibbonMarkStormy: false,
      RibbonMarkSnowy: false,
      RibbonMarkBlizzard: false,
      RibbonMarkDry: false,
      RibbonMarkSandstorm: false,
      RibbonCountMemoryContest: 0,
      RibbonCountMemoryBattle: 0,
      RibbonMarkMisty: false,
      RibbonMarkDestiny: false,
      RibbonMarkFishing: false,
      RibbonMarkCurry: false,
      RibbonMarkUncommon: false,
      RibbonMarkRare: false,
      RibbonMarkRowdy: false,
      RibbonMarkAbsentMinded: false,
      RibbonMarkJittery: false,
      RibbonMarkExcited: false,
      RibbonMarkCharismatic: false,
      RibbonMarkCalmness: false,
      RibbonMarkIntense: false,
      RibbonMarkZonedOut: false,
      RibbonMarkJoyful: false,
      RibbonMarkAngry: false,
      RibbonMarkSmiley: false,
      RibbonMarkTeary: false,
      RibbonMarkUpbeat: false,
      RibbonMarkPeeved: false,
      RibbonMarkIntellectual: false,
      RibbonMarkFerocious: false,
      RibbonMarkCrafty: false,
      RibbonMarkScowling: false,
      RibbonMarkKindly: false,
      RibbonMarkFlustered: false,
      RibbonMarkPumpedUp: false,
      RibbonMarkZeroEnergy: false,
      RibbonMarkPrideful: false,
      RibbonMarkUnsure: false,
      RibbonMarkHumble: false,
      RibbonMarkThorny: false,
      RibbonMarkVigor: false,
      RibbonMarkSlump: false,
      RIB44_2: false,
      RIB44_3: false,
      RIB44_4: false,
      RIB44_5: false,
      RIB44_6: false,
      RIB44_7: false,
      RIB45_0: false,
      RIB45_1: false,
      RIB45_2: false,
      RIB45_3: false,
      RIB45_4: false,
      RIB45_5: false,
      RIB45_6: false,
      RIB45_7: false,
      RIB46_0: false,
      RIB46_1: false,
      RIB46_2: false,
      RIB46_3: false,
      RIB46_4: false,
      RIB46_5: false,
      RIB46_6: false,
      RIB46_7: false,
      RIB47_0: false,
      RIB47_1: false,
      RIB47_2: false,
      RIB47_3: false,
      RIB47_4: false,
      RIB47_5: false,
      RIB47_6: false,
      RIB47_7: false,
      U48: 10,
      HeightScalar: 195,
      WeightScalar: 212,
      Nickname: "Zygarde",
      Move1: 322,
      Move2: 94,
      Move3: 444,
      Move4: 248,
      Move1_PP: 20,
      Move2_PP: 10,
      Move3_PP: 5,
      Move4_PP: 10,
      Move1_PPUps: 0,
      Move2_PPUps: 0,
      Move3_PPUps: 0,
      Move4_PPUps: 0,
      RelearnMove1: 0,
      RelearnMove2: 0,
      RelearnMove3: 0,
      RelearnMove4: 0,
      Stat_HPCurrent: 62,
      IV_HP: 21,
      IV_ATK: 11,
      IV_DEF: 23,
      IV_SPE: 12,
      IV_SPA: 14,
      IV_SPD: 21,
      IsEgg: false,
      IsNicknamed: false,
      DynamaxLevel: 0,
      Status_Condition: 0,
      Unk98: 0,
      HT_Name: "",
      HT_Gender: 0,
      HT_Language: 0,
      CurrentHandler: 0,
      HT_TrainerID: 0,
      HT_Friendship: 0,
      HT_Intensity: 0,
      HT_Memory: 0,
      HT_Feeling: 0,
      HT_TextVar: 0,
      Fullness: 0,
      Enjoyment: 0,
      Version: 45,
      Country: 0,
      Region: 0,
      ConsoleRegion: 0,
      Language: 2,
      UnkE3: 0,
      FormArgument: 0,
      AffixedRibbon: -1,
      OT_Name: "Zak",
      OT_Friendship: 121,
      OT_Intensity: 6,
      OT_Memory: 83,
      OT_TextVar: 714,
      OT_Feeling: 20,
      Egg_Year: 0,
      Egg_Month: 0,
      Egg_Day: 0,
      Met_Year: 19,
      Met_Month: 11,
      Met_Day: 19,
      Egg_Location: 0,
      Met_Location: 86,
      Ball: 2,
      Met_Level: 40,
      OT_Gender: 0,
      HyperTrainFlags: 0,
      HT_HP: false,
      HT_ATK: false,
      HT_DEF: false,
      HT_SPA: false,
      HT_SPD: false,
      HT_SPE: false,
      Stat_Level: 43,
      Stat_HPMax: 62,
      Stat_ATK: 12,
      Stat_DEF: 15,
      Stat_SPE: 11,
      Stat_SPA: 11,
      Stat_SPD: 15,
      DynamaxType: 0,
      MaxMoveID: 796,
      MaxSpeciesID: 890,
      MaxAbilityID: 258,
      MaxItemID: 1278,
      MaxBallID: 26,
      MaxGameID: 45,
      Extension: "pk8",
      Box: -1,
      Slot: -1,
      EncryptedPartyData: "test",
      EncryptedBoxData: "test",
      DecryptedPartyData: "test",
      DecryptedBoxData: "test",
      Valid: true,
      Japanese: false,
      Korean: false,
      Chinese: false,
      HT_Affection: 0,
      MetDate: "2019-11-19T00:00:00",
      EggMetDate: null,
      OT_Affection: 0,
      EncounterType: 0,
      MinGameID: 0,
      SpecForm: 718,
      SpriteItem: 0,
      IsShiny: false,
      StorageFlags: 0,
      Locked: false,
      TrainerID7: 624102,
      TrainerSID7: 2104,
      ShinyXor: 14894,
      DisplayTID: 624102,
      DisplaySID: 2104,
      E: false,
      FRLG: false,
      Pt: false,
      HGSS: false,
      BW: false,
      B2W2: false,
      XY: false,
      AO: false,
      SM: false,
      USUM: false,
      GO: false,
      VC1: false,
      VC2: false,
      GG: false,
      SWSH: true,
      VC: false,
      Gen8: true,
      Gen7: false,
      Gen6: false,
      Gen5: false,
      Gen4: false,
      Gen3: false,
      Gen2: false,
      Gen1: false,
      GenU: false,
      GenNumber: 8,
      DebutGeneration: 6,
      PKRS_Infected: false,
      PKRS_Cured: false,
      ChecksumValid: true,
      CurrentLevel: 43,
      MarkCircle: 0,
      MarkTriangle: 0,
      MarkSquare: 0,
      MarkHeart: 0,
      MarkStar: 0,
      MarkDiamond: 0,
      IVTotal: 102,
      EVTotal: 80,
      MaximumIV: 23,
      FlawlessIVCount: 0,
      FileName: "718 - Zygarde.pk8",
      FileNameWithoutExtension: "718 - Zygarde",
      PIDAbility: -1,
      HPPower: 60,
      HPType: 9,
      TradebackStatus: 0,
      Gen1_NotTradeback: false,
      Gen2_NotTradeback: false,
      WasEgg: false,
      WasBredEgg: false,
      WasGiftEgg: false,
      WasTradedEgg: false,
      IsTradedEgg: false,
      IsNative: true,
      IsOriginValid: true,
      HasOriginalMetLocation: true,
      PotentialRating: 1,
      PartyStatsPresent: true,
      IsLegal: false,
      RelearnMoves: [0, 0, 0, 0],
      Moves: [322, 94, 444, 248],
      Stats: [62, 12, 15, 11, 11, 15],
      EVs: [8, 23, 21, 11, 4, 13],
      IVs: [21, 11, 23, 12, 14, 21],
      Markings: [0, 0, 0, 0, 0, 0, 0, 0],
      ExtraBytes: [23, 26, 27, 35, 51, 62, 63, 197, 277, 287],
      isPublic: false
    }
  }
];

const mocks = {
  Query: () => ({
    pkx: () => pkxList[0],
    pkxList: () => pkxList,
    collection: () => pkxList,
    collectionNames: () => ["Default", "Special Pokemon"],
    username: () => "Test-User"
  })
};

export const apolloDecorator = apolloStorybookDecorator({
  typeDefs,
  mocks
});
