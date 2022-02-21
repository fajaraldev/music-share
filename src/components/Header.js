import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import {HeadsetRounded} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: theme.spacing(2)
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar color="primary" position='fixed'>
        <Toolbar>
          <HeadsetRounded/>
          <Typography className={classes.title} variant="h6" component="h1">
            Music Share Aplication
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
