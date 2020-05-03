import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import { useTranslation } from 'react-i18next';
import { PokemonBall } from '../pokemon-ball';
import { PokemonSprite } from '../pokemon-sprite';
import { getLocalizedDate } from '../../utils/get-localized-date';
import { useHistory } from 'react-router-dom';
import { createPokemonRoute } from '../../routes';

const LanguageCell = ({ language }) => {
  const { t } = useTranslation();
  return t(`languages.${language}`);
};

const AbilityCell = ({ ability }) => {
  const { t } = useTranslation();
  return ability > -1 ? t(`abilities.${ability}`) : t('None');
};

const MovesCell = ({ move1, move2, move3, move4 }) => {
  const { t } = useTranslation();
  return [
    t(`moves.${move1}`),
    t(`moves.${move2}`),
    t(`moves.${move3}`),
    t(`moves.${move4}`),
  ].join(', ');
};

const GenderCell = ({ gender }) => {
  const { t } = useTranslation();
  return t(`genders.${gender}`);
};

const StatNatureCell = ({ statNature }) => {
  const { t } = useTranslation();
  return t(`natures.${statNature}`);
};

const ActionsCell = ({
  id,
  isViewerOwner,
  ownerId,
  collectionId,
  onDeletePokemon,
}) => {
  const history = useHistory();
  return (
    <>
      <IconButton
        aria-label="view"
        onClick={() =>
          history.push(createPokemonRoute(ownerId, collectionId, id))
        }
      >
        <VisibilityIcon />
      </IconButton>
      {isViewerOwner && (
        <IconButton aria-label="delete" onClick={() => onDeletePokemon(id)}>
          <DeleteIcon />
        </IconButton>
      )}
    </>
  );
};

const SpeciesCell = ({ species }) => <PokemonSprite id={species} />;

const BallCell = ({ ball }) => <PokemonBall id={ball} />;

const ShinyCell = ({ isShiny }) => (isShiny ? <CheckIcon /> : null);

const EggCell = ({ isEgg }) => (isEgg ? <CheckIcon /> : null);

const CanGigantamaxCell = ({ canGigantamax }) =>
  canGigantamax ? <CheckIcon /> : null;

const IVsCell = ({ IV_HP, IV_ATK, IV_DEF, IV_SPA, IV_SPD, IV_SPE }) =>
  [IV_HP, IV_ATK, IV_DEF, IV_SPA, IV_SPD, IV_SPE].join('/');

const EVsCell = ({ EV_HP, EV_ATK, EV_DEF, EV_SPA, EV_SPD, EV_SPE }) =>
  [EV_HP, EV_ATK, EV_DEF, EV_SPA, EV_SPD, EV_SPE].join('/');

const VerifedLegalCell = ({ isLegal }) => (isLegal ? <CheckIcon /> : null);

const MetDateCell = ({ metYear, metMonth, metDay }) =>
  getLocalizedDate(2000 + metYear, metMonth, metDay);

const EggMetDateCell = ({ eggYear, eggMonth, eggDay }) =>
  getLocalizedDate(2000 + eggYear, eggMonth, eggDay);

export const columns = [
  {
    name: 'Actions',
    width: 150,
    cell: ActionsCell,
  },
  { name: 'Species', width: 100, cell: SpeciesCell },
  { name: 'Ball', width: 100, cell: BallCell },
  {
    name: 'Shiny',
    width: 100,
    cell: ShinyCell,
  },
  {
    name: 'Egg',
    width: 100,
    cell: EggCell,
  },
  {
    name: 'CanGigantamax',
    header: 'Gigantamax',
    width: 100,
    cell: CanGigantamaxCell,
  },
  {
    name: 'Ability',
    header: 'Ability',
    width: 100,
    cell: AbilityCell,
  },
  {
    name: 'Language',
    width: 100,
    cell: LanguageCell,
  },
  {
    name: 'Moves',
    width: 400,
    cell: MovesCell,
  },
  {
    name: 'gender',
    header: 'Gender',
    cell: GenderCell,
    width: 100,
  },
  {
    name: 'currentLevel',
    header: 'Level',
    width: 100,
  },
  {
    name: 'StatNature',
    header: 'Nature',
    width: 100,
    cell: StatNatureCell,
  },
  {
    name: 'IVs',
    width: 150,
    cell: IVsCell,
  },
  {
    name: 'EVs',
    width: 150,
    cell: EVsCell,
  },
  {
    name: 'Verified Legal',
    width: 150,
    cell: VerifedLegalCell,
  },
  { name: 'genNumber', header: 'Generation', width: 100 },
  { name: 'otName', header: 'OT Name', width: 100 },
  { name: 'displayTID', header: 'TID', width: 100 },
  { name: 'displaySID', header: 'SID', width: 100 },
  {
    name: 'Met Date',
    width: 200,
    cell: MetDateCell,
  },
  {
    name: 'Egg Met Date',
    width: 200,
    cell: EggMetDateCell,
  },
];
