import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { TitleCard } from '../title-card';
import { useTranslation } from 'react-i18next';

export const PokemonOtInfo = ({ otName = '', tid = 0, sid = 0 }) => {
  const { t } = useTranslation();
  const rows = [
    { translationKey: 'Name', value: otName },
    { translationKey: 'TID', value: tid },
    { translationKey: 'SID', value: sid },
  ].map(({ translationKey, value }) => (
    <TableRow key={translationKey}>
      <TableCell>{t(translationKey)}</TableCell>
      <TableCell>{value}</TableCell>
    </TableRow>
  ));

  return (
    <TitleCard title="OT Info">
      <Table size="small">
        <TableBody>{rows}</TableBody>
      </Table>
    </TitleCard>
  );
};
