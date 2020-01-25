import React from "react";
import Grid from "@material-ui/core/Grid";
import { PKXLayout } from "../layouts/pkx";
import { PKXSummary } from "../components/pkx-summary";
import { PKXMoves } from "../components/pkx-moves";
import { PKXStats } from "../components/pkx-stats";
import { PKXOtInfo } from "../components/pkx-ot-info";
import { PKXOrigin } from "../components/pkx-origin";

export const PKXView = ({ match }) => {
  const { pkxId, userId } = match.params;

  return (
    <PKXLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <PKXSummary userId={userId} pkxId={pkxId} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <PKXOtInfo userId={userId} pkxId={pkxId} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <PKXOrigin userId={userId} pkxId={pkxId} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <PKXMoves userId={userId} pkxId={pkxId} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <PKXStats userId={userId} pkxId={pkxId} />
        </Grid>
      </Grid>
    </PKXLayout>
  );
};
