import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { TitleCard } from '../title-card';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  tableHeader: {
    '& tr > th': {
      fontWeight: 'bold',
    },
  },
});

export const PokemonMoves = ({ moves = [] }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const moveRows = moves.map((move, index) => (
    // The index is used since there isn't a unique prop and these won't be reordered
    <TableRow key={index}>
      <TableCell>{t(`moves.${move}`)}</TableCell>
    </TableRow>
  ));

  return (
    <TitleCard title="Moves">
      <Table size="small">
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell>Moves</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{moveRows}</TableBody>
      </Table>
    </TitleCard>
  );
};
