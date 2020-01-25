import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useQuery } from "@apollo/react-hooks";
import { GET_PKX_DETAILS } from "../../graphql/queries/pkx-details";
import { TitleCard } from "../title-card";
import { useTranslation } from "react-i18next";

export const PKXOtInfo = ({ userId, pkxId }) => {
  const { t } = useTranslation();
  const {
    data = { pkx: { pkx: { PersonalInfo: {}, IVs: [], EVs: [], Stats: [] } } }
  } = useQuery(GET_PKX_DETAILS, {
    variables: { userId, pkxId }
  });
  const { OT_Name, TID, SID, TSV } = data.pkx.pkx;
  const rows = [
    { translationKey: "Name", value: OT_Name },
    { translationKey: "TID", value: TID },
    { translationKey: "SID", value: SID },
    { translationKey: "TSV", value: TSV }
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
