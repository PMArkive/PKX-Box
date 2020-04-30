import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { HoverCard } from '../hover-card';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
});

const ForwwardRefTitleCard = (
  { title, children, cardActions, ...props },
  ref,
) => {
  const classes = useStyles();

  return (
    <HoverCard className={classes.card} ref={ref} {...props}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        {children}
      </CardContent>
      {cardActions && <CardActions>{cardActions}</CardActions>}
    </HoverCard>
  );
};

export const TitleCard = React.forwardRef(ForwwardRefTitleCard);
