import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useQuery } from "@apollo/react-hooks";
import { GET_PKX_DETAILS } from "../../graphql/queries/pkx-details";
import { TitleCard } from "../title-card";
import { useTranslation } from "react-i18next";

export const PKXOrigin = ({ userId, pkxId }) => {
  const { t } = useTranslation();
  const {
    data = { pkx: { pkx: { PersonalInfo: {}, IVs: [], EVs: [], Stats: [] } } }
  } = useQuery(GET_PKX_DETAILS, {
    variables: { userId, pkxId }
  });
  const { MetDate, Met_Level, EggMetDate, Language, Version } = data.pkx.pkx;
  const rows = [
    { translationKey: "Met Date", value: MetDate },
    { translationKey: "Met Level", value: Met_Level },
    { translationKey: "Egg Met Date", value: EggMetDate },
    { translationKey: "Language", value: t(`languages.${Language}`) },
    { translationKey: "Version", value: t(`games.${Version}`) }
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
