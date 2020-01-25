import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  }
});

export const TitleCard = ({ title, children, cardActions, ...props }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} {...props}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        {children}
      </CardContent>
      {cardActions && <CardActions>{cardActions}</CardActions>}
    </Card>
  );
};
