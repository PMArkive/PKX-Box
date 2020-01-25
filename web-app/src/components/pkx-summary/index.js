import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { PKXItem } from "../pkx-item";
import { PKXSprite } from "../pkx-sprite.js";
import { useQuery } from "@apollo/react-hooks";
import { GET_PKX_DETAILS } from "../../graphql/queries/pkx-details";

const useStyles = makeStyles({
  ivs: {
    marginTop: 12,
    marginBottom: 12
  }
});

const Summary = ({ pkx = {}, hasShowMore = false, onShowMore }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const {
    Ability = 0,
    Ball = 4,
    HeldItem = 1,
    IVs = [0, 0, 0, 0, 0, 0],
    Nature = 0,
    Species = 1
  } = pkx;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5">{t(`species.${Species}`)}</Typography>
        <PKXSprite id={Species} />
        <PKXItem id={Ball} />
        <PKXItem id={HeldItem} />
        <Typography className={classes.ivs} color="textSecondary">
          {IVs.join(".")}
        </Typography>
        <Typography variant="body2" component="p">
          {t(`natures.${Nature}`)} - {t(`abilities.${Ability}`)}
        </Typography>
      </CardContent>
      {hasShowMore && (
        <CardActions>
          <Button size="small" onClick={onShowMore}>
            Show More
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

const ConnectedSummary = ({ userId, pkxId, ...props }) => {
  const { data = { pkx: { pkx: {} } } } = useQuery(GET_PKX_DETAILS, {
    variables: { userId, pkxId }
  });

  return <Summary {...props} pkx={data.pkx.pkx} />;
};

export const PKXSummary = ({ pkx, ...props }) => {
  const SummaryComponent = pkx ? Summary : ConnectedSummary;

  return <SummaryComponent pkx={pkx} {...props} />;
};
