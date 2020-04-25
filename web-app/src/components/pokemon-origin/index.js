import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { TitleCard } from '../title-card';
import { useTranslation } from 'react-i18next';
import { getLocalizedDate } from '../../utils/get-localized-date';

export const PokemonOrigin = ({
  metYear = 0,
  metMonth = 0,
  metDay = 0,
  eggMetYear = 0,
  eggMetMonth = 0,
  eggMetDay = 0,
  language = 0,
  version = 0,
}) => {
  const { t } = useTranslation();
  const metDate = getLocalizedDate(metYear, metMonth, metDay);
  const eggMetDate = getLocalizedDate(eggMetYear, eggMetMonth, eggMetDay);
  const rows = [
    { translationKey: 'Met Date', value: metDate },
    { translationKey: 'Egg Met Date', value: eggMetDate },
    { translationKey: 'Language', value: t(`languages.${language}`) },
    { translationKey: 'Version', value: t(`games.${version}`) },
  ].map(({ translationKey, value }) => (
    <TableRow key={translationKey}>
      <TableCell>{t(translationKey)}</TableCell>
      <TableCell>{value}</TableCell>
    </TableRow>
  ));

  return (
    <TitleCard title="Encounter Info">
      <Table size="small">
        <TableBody>{rows}</TableBody>
      </Table>
    </TitleCard>
  );
};
