import './App.css';
import 'typeface-roboto';
import {Container, createStyles, Grid, Paper, Theme} from "@material-ui/core";
import {makeStyles, createMuiTheme} from "@material-ui/core/styles";
import {MuiThemeProvider} from "@material-ui/core";
import React from 'react';
import ChangingTracker from "./components/ChangingTracker";
import FeedingTracker from "./components/FeedingTracker";
import PageHeader from "./components/PageHeader";
import Schedule from "./components/Schedule";
import WeightTracker from "./components/WeightTracker";


const useStyles = makeStyles((theme: Theme) => createStyles({
  row: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(3),
  },
}));


const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
        <PageHeader/>
        <Grid container direction="row" justify="center">
          <Grid item xs={10}>
            <Paper className={classes.row}>
              <Schedule/>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.row}>
              <FeedingTracker/>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.row}>
              <ChangingTracker/>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.row}>
              <WeightTracker/>
            </Paper>
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
