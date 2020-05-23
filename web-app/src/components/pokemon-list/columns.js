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
        aria-label="View pokemon"
        onClick={() =>
          history.push(createPokemonRoute(ownerId, collectionId, id))
        }
      >
        <VisibilityIcon />
      </IconButton>
      {isViewerOwner && (
        <IconButton
          aria-label="Delete pokemon"
          onClick={() => onDeletePokemon(id)}
        >
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

const IVsCell = ({ ivHP, ivATK, ivDEF, ivSPA, ivSPD, ivSPE }) =>
  [ivHP, ivATK, ivDEF, ivSPA, ivSPD, ivSPE].join('.');

const EVsCell = ({ evHP, evATK, evDEF, evSPA, evSPD, evSPE }) =>
  [evHP, evATK, evDEF, evSPA, evSPD, evSPE].join('.');

const VerifedLegalCell = ({ verifiedLegal }) =>
  verifiedLegal ? <CheckIcon /> : null;

const MetDateCell = ({ metYear, metMonth, metDay }) =>
  getLocalizedDate(2000 + metYear, metMonth, metDay);

const EggMetDateCell = ({ eggYear, eggMonth, eggDay }) =>
  getLocalizedDate(2000 + eggYear, eggMonth, eggDay);

const createIdentityCell = (propName) => (pkx) => {
  const value = pkx?.[propName];
  return value === null ? '' : value;
};

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
    name: 'Gigantamax',
    width: 100,
    cell: CanGigantamaxCell,
  },
  {
    name: 'Verified Legal',
    width: 150,
    cell: VerifedLegalCell,
  },
  {
    name: 'Ability',
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
    name: 'Gender',
    cell: GenderCell,
    width: 100,
  },
  {
    name: 'Level',
    width: 100,
    cell: createIdentityCell('currentLevel'),
  },
  {
    name: 'Nature',
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
    name: 'Generation',
    width: 100,
    cell: createIdentityCell('genNumber'),
  },
  {
    name: 'OT Name',
    width: 100,
    cell: createIdentityCell('otName'),
  },
  {
    name: 'TID',
    width: 100,
    cell: createIdentityCell('displayTID'),
  },
  {
    name: 'SID',
    width: 100,
    cell: createIdentityCell('displaySID'),
  },
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
