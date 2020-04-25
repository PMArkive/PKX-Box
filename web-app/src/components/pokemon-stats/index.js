import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { TitleCard } from '../title-card';

const useStyles = makeStyles({
  tableHeader: {
    '& tr > th': {
      fontWeight: 'bold',
    },
  },
});

export const PokemonStats = ({ ivs = [], evs = [] }) => {
  const classes = useStyles();
  const rowNames = ['HP', 'Atk', 'Def', 'SpA', 'SpD', 'Spe'];
  const rows = rowNames.map((name, index) => (
    <TableRow key={name}>
      <TableCell>{name}</TableCell>
      <TableCell>{ivs[index]}</TableCell>
      <TableCell>{evs[index]}</TableCell>
    </TableRow>
  ));

  return (
    <TitleCard title="Stats">
      <Table size="small">
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell>Stat</TableCell>
            <TableCell>IV</TableCell>
            <TableCell>EV</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TitleCard>
  );
};
