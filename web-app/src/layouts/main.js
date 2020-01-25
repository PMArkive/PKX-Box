import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "../components/app-bar";
import { NavDrawer } from "../components/nav-drawer";

const useStyles = makeStyles(theme => ({
  content: {
    [theme.breakpoints.up("md")]: {
      flexGrow: 1,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: 0
    }
  },
  contentShift: {
    [theme.breakpoints.up("md")]: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: theme.mixins.navDrawer.width
    }
  },
  contentPadding: {
    padding: "0.8rem",
    [theme.breakpoints.up("md")]: {
      padding: "3rem 2rem"
    }
  }
}));

export const MainLayout = ({ children }) => {
  const classes = useStyles();
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const contentClass = isNavDrawerOpen ? classes.contentShift : classes.content;
  const handleDrawerClose = () => setIsNavDrawerOpen(false);
  const toggleNavDrawer = () => setIsNavDrawerOpen(!isNavDrawerOpen);

  return (
    <>
      <NavDrawer isOpen={isNavDrawerOpen} onClose={handleDrawerClose} />
      <AppBar className={contentClass} toggleNavDrawer={toggleNavDrawer} />
      <div className={[contentClass, classes.contentPadding].join(" ")}>
        {children}
      </div>
    </>
  );
};
