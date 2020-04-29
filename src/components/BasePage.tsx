import {createStyles, Paper, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from 'react';
import BodyContainer, {BodyContainerProps} from "./BodyContainer";

const useStyles = makeStyles((theme: Theme) => createStyles({
  'paper': {
    padding: theme.spacing(3)
  }
}))


const BasePage = ({children}: BodyContainerProps) => {
  const classes = useStyles();

  return (
    <BodyContainer>
      <Paper className={classes.paper}>
        {children}
      </Paper>
    </BodyContainer>
  )

};

export default BasePage;
