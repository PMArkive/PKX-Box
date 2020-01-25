import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useQuery } from "@apollo/react-hooks";
import { GET_USER_INFO } from "../../graphql/queries/user";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export const AppBar = ({ className, toggleNavDrawer }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { loading, error, data = { user: {} } } = useQuery(GET_USER_INFO);
  const displayName = `${data.user.username}#${data.user.discriminator}`;
  const user =
    loading || error ? (
      <Button color="inherit">Login</Button>
    ) : (
      <Typography variant="h6">{displayName}</Typography>
    );

  return (
    <div className={[classes.root, className].join(" ")}>
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
            {t("PKX Box")}
          </Typography>
          {user}
        </Toolbar>
      </MUIAppBar>
    </div>
  );
};
