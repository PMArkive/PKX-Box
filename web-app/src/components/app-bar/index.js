import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MUIAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GET_USER_INFO } from '../../graphql/queries/user';
import { generalConfig } from '../../config';
import { UserMenu } from '../user-menu';
import { createCollectionListRoute } from '../../routes';
import { useToast } from '../toast';

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
}));

export const AppBar = ({ className, toggleNavDrawer }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(GET_USER_INFO);
  const history = useHistory();
  const setToast = useToast();
  const user = data?.viewer;
  const loggedInUserId = user?.id || null;
  const isLoggedIn = loggedInUserId !== null;
  const displayName = `${user?.discordUsername}#${user?.discordDiscriminator}`;
  const navigateToAccount = () =>
    history.push(createCollectionListRoute(loggedInUserId));
  const handleLogout = async () => {
    try {
      await fetch('/logout', {
        method: 'POST',
        credentials: 'same-origin',
      });
      window.location.href = '/';
    } catch (error) {
      setToast('Error logging out', 'error', true);
    }
  };
  const userDisplay =
    loading || error || !isLoggedIn ? (
      <Button color="inherit" href={generalConfig.loginUrl}>
        Login
      </Button>
    ) : (
      <UserMenu
        userId={loggedInUserId}
        displayName={displayName}
        onClickAccount={navigateToAccount}
        onClickLogout={handleLogout}
      />
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
