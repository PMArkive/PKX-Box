import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "@apollo/react-hooks";
import { GET_PKX_DETAILS } from "../../graphql/queries/pkx-details";
import { TitleCard } from "../title-card";

const useStyles = makeStyles({
  tableHeader: {
    "& tr > th": {
      fontWeight: "bold"
    }
  }
});

export const PKXStats = ({ userId, pkxId }) => {
  const classes = useStyles();
  const {
    data = { pkx: { pkx: { PersonalInfo: {}, IVs: [], EVs: [], Stats: [] } } }
  } = useQuery(GET_PKX_DETAILS, {
    variables: { userId, pkxId }
  });
  const { pkx } = data.pkx;
  const { IVs, EVs, Stats } = pkx;
  const { HP, ATK, DEF, SPA, SPD, SPE } = pkx.PersonalInfo;
  const baseStats = [HP, ATK, DEF, SPA, SPD, SPE];
  const rowNames = ["HP", "Atk", "Def", "SpA", "SpD", "Spe"];
  const rows = rowNames.map((name, index) => (
    <TableRow key={name}>
      <TableCell>{name}</TableCell>
      <TableCell>{baseStats[index]}</TableCell>
      <TableCell>{IVs[index]}</TableCell>
      <TableCell>{EVs[index]}</TableCell>
      <TableCell>{Stats[index]}</TableCell>
    </TableRow>
  ));

  return (
    <TitleCard title="Stats">
      <Table size="small">
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell>Stat</TableCell>
            <TableCell>Base</TableCell>
            <TableCell>IV</TableCell>
            <TableCell>EV</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TitleCard>
  );
};
