import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from '../constants/routes';


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    color: "rgba(0, 0, 0, 0.8)",
  },
  addEntryBtn: {}
}));


const PageHeader = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography variant="h5">
          <i className="fad fa-saxophone"/>Jazz AtTrack
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default PageHeader;