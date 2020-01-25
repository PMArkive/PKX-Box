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
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  tableHeader: {
    "& tr > th": {
      fontWeight: "bold"
    }
  }
});

export const PKXMoves = ({ userId, pkxId }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data = { pkx: { pkx: { Moves: [], RelearnMoves: [] } } } } = useQuery(
    GET_PKX_DETAILS,
    {
      variables: { userId, pkxId }
    }
  );
  const {
    Moves,
    RelearnMoves,
    Move1_PP,
    Move2_PP,
    Move3_PP,
    Move4_PP,
    Move1_PPUps,
    Move2_PPUps,
    Move3_PPUps,
    Move4_PPUps
  } = data.pkx.pkx;
  const movePPs = [Move1_PP, Move2_PP, Move3_PP, Move4_PP];
  const movePPUps = [Move1_PPUps, Move2_PPUps, Move3_PPUps, Move4_PPUps];
  const moveRows = Moves.map((move, index) => (
    // The index is used since there isn't a unique prop and these won't be reordered
    <TableRow key={index}>
      <TableCell>{t(`moves.${move}`)}</TableCell>
      <TableCell>-</TableCell>
      <TableCell>{movePPs[index]}</TableCell>
      <TableCell>{movePPUps[index]}</TableCell>
    </TableRow>
  ));

  return (
    <TitleCard title="Moves">
      <Table size="small">
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell>Moves</TableCell>
            <TableCell>Power</TableCell>
            <TableCell>PP</TableCell>
            <TableCell>PPUp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{moveRows}</TableBody>
      </Table>
      <Table size="small">
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell colSpan={2}>Relearnable Moves</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{t(`moves.${RelearnMoves[0]}`)}</TableCell>
            <TableCell>{t(`moves.${RelearnMoves[1]}`)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t(`moves.${RelearnMoves[2]}`)}</TableCell>
            <TableCell>{t(`moves.${RelearnMoves[3]}`)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TitleCard>
  );
};
