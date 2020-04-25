import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '../components/app-bar';
import { NavDrawer } from '../components/nav-drawer';
import { Toast } from '../components/toast';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  loadingContainer: {
    width: '100%',
    height: '20rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
    },
  },
  contentShift: {
    [theme.breakpoints.up('md')]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: theme.mixins.navDrawer.width,
    },
  },
  contentPadding: ({ hasContentPadding }) =>
    hasContentPadding
      ? {
          padding: '0.8rem',
          [theme.breakpoints.up('md')]: {
            padding: '3rem 2rem',
          },
        }
      : {},
}));

export const MainLayout = ({ children, loading, hasContentPadding = true }) => {
  const classes = useStyles({ hasContentPadding });
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const contentClass = isNavDrawerOpen ? classes.contentShift : classes.content;
  const handleDrawerClose = () => setIsNavDrawerOpen(false);
  const toggleNavDrawer = () => setIsNavDrawerOpen(!isNavDrawerOpen);

  const content = loading ? (
    <div className={classes.loadingContainer}>
      <CircularProgress />
    </div>
  ) : (
    <div className={[contentClass, classes.contentPadding].join(' ')}>{children}</div>
  );

  return (
    <>
      <NavDrawer isOpen={isNavDrawerOpen} onClose={handleDrawerClose} />
      <AppBar className={contentClass} toggleNavDrawer={toggleNavDrawer} />
      {content}
      <Toast />
    </>
  );
};
