import {createStyles, Grid, MuiThemeProvider, Paper, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import BodyContainer from "../components/BodyContainer";
import ChangingTracker from "../components/ChangingTracker";
import FeedingTracker from "../components/FeedingTracker";
import Schedule from "../components/Schedule";
import WeightTracker from "../components/WeightTracker";

const useStyles = makeStyles((theme: Theme) => createStyles({
  row: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <BodyContainer>
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
    </BodyContainer>
  );
};

export default Home;