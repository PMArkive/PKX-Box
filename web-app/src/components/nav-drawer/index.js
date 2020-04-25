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
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_INFO } from '../../graphql/queries/user';
import { useTranslation } from 'react-i18next';
import { createCollectionListRoute } from '../../routes';

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.mixins.navDrawer.width,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export const NavDrawer = ({ isOpen, onClose }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const history = useHistory();
  const { data } = useQuery(GET_USER_INFO);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const drawerVariant = isSmallScreen ? 'temporary' : 'persistent';
  const onClickHome = () => {
    const homeRoute = createCollectionListRoute(data?.viewer?.id);

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
      <div className={classes.header}>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button onClick={onClickHome}>
          <ListItemText>{t('Home')}</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};
