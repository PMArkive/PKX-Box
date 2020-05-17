import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '../components/app-bar';
import { NavDrawer } from '../components/nav-drawer';
import { Toast } from '../components/toast';
import CircularProgress from '@material-ui/core/CircularProgress';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: 'white',
    color: 'black',
    marginTop: '0.5em',
  },
  breadcrumbLink: {
    color: 'inherit',
    textDecoration: 'none',
  },
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
            padding: '0 2rem',
          },
        }
      : {},
}));

export const MainLayout = ({
  children,
  loading,
  breadcrumbs,
  hasContentPadding = true,
}) => {
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
    <div className={[contentClass, classes.contentPadding].join(' ')}>
      {children}
    </div>
  );

  return (
    <>
      <NavDrawer isOpen={isNavDrawerOpen} onClose={handleDrawerClose} />
      <AppBar
        className={contentClass}
        toggleNavDrawer={toggleNavDrawer}
        breadcrumbs={breadcrumbs}
      />
      <Toolbar className={classes.toolbar}>
        <Breadcrumbs>
          {breadcrumbs?.map(({ text, href }, index) => (
            <Link className={classes.breadcrumbLink} to={href}>
              <Typography variant="body1" key={index}>
                {text}
              </Typography>
            </Link>
          ))}
        </Breadcrumbs>
      </Toolbar>
      {content}
      <Toast />
    </>
  );
};
