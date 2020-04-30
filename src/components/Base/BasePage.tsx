import {createStyles, Grid, Paper, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from 'react';
import BodyContainer, {BodyContainerProps} from "../BodyContainer";

const useStyles = makeStyles((theme: Theme) => createStyles({
  'paper': {
    padding: theme.spacing(3)
  }
}))


const BasePage = ({children}: BodyContainerProps) => {
  const classes = useStyles();

  return (
    <BodyContainer>
      <Grid container direction="row" justify="center">
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            {children}
          </Paper>
        </Grid>
      </Grid>
    </BodyContainer>
  )

};


export default BasePage;
