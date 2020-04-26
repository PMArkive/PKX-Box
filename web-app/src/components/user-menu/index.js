import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { noop } from '../../utils/noop';

const useStyles = makeStyles({
  userButton: {
    textTransform: 'none',
  },
});

export const UserMenu = ({
  displayName,
  onClickAccount = noop,
  onClickLogout = noop,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleClickAccount = () => {
    onClickAccount();
    handleClose();
  };
  const handleClickLogout = () => {
    onClickLogout();
    handleClose();
  };

  return (
    <>
      <Button
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
        className={classes.userButton}
      >
        <Typography variant="h6">{displayName}</Typography>
      </Button>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClickAccount}>My account</MenuItem>
        <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};
