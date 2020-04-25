import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MUIAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_INFO } from '../../graphql/queries/user';
import { useTranslation } from 'react-i18next';
import { createCollectionListRoute } from '../../routes';
import { useHistory } from 'react-router-dom';
import { generalConfig } from '../../config';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userButton: {
    textTransform: 'none',
  },
}));

export const AppBar = ({ className, toggleNavDrawer }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_USER_INFO);
  const user = data?.viewer;
  const loggedInUserId = user?.id || null;
  const isLoggedIn = loggedInUserId !== null;
  const displayName = `${user?.discordUsername}#${user?.discordDiscriminator}`;
  const userDisplay =
    loading || error || !isLoggedIn ? (
      <Button color="inherit" href={generalConfig.loginUrl}>
        Login
      </Button>
    ) : (
      <Button
        color="inherit"
        component="a"
        className={classes.userButton}
        onClick={() => history.push(createCollectionListRoute(loggedInUserId))}
      >
        <Typography variant="h6">{displayName}</Typography>
      </Button>
    );

  return (
    <div className={[classes.root, className].join(' ')}>
      <MUIAppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={toggleNavDrawer}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {t('PKX Box')}
          </Typography>
          {userDisplay}
        </Toolbar>
      </MUIAppBar>
    </div>
  );
};
