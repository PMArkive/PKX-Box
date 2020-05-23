import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_VIEWER_INFO } from '../../graphql/queries/user';
import { useTranslation } from 'react-i18next';
import { createCollectionListRoute } from '../../routes';
import { generalConfig } from '../../config';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: theme.mixins.navDrawer.width,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  buildInfo: {
    margin: '1rem',
  },
}));

export const NavDrawer = ({ isOpen, onClose }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const history = useHistory();
  const { data } = useQuery(GET_VIEWER_INFO);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const drawerVariant = isSmallScreen ? 'temporary' : 'persistent';
  const onClickHome = () => {
    const homeRoute = createCollectionListRoute(data?.viewer?.user?.id);

    if (isSmallScreen) {
      onClose();
      setTimeout(history.push, 300, homeRoute);
    } else {
      history.push(homeRoute);
    }
  };

  return (
    <Drawer
      className={classes.root}
      variant={drawerVariant}
      anchor="left"
      open={isOpen}
      onClose={onClose}
      classes={{ paper: classes.root }}
    >
      <div>
        <div className={classes.header}>
          <IconButton onClick={onClose} aria-label="Open navigation drawer">
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={onClickHome}>
            <ListItemText>{t('Home')}</ListItemText>
          </ListItem>
        </List>
      </div>
      <div className={classes.buildInfo}>
        <Typography variant="body1">Hash: {generalConfig.gitHash}</Typography>
        <Typography variant="body1">
          Last updated: {generalConfig.buildDate}
        </Typography>
      </div>
    </Drawer>
  );
};
