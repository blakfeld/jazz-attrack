import React from 'react';
import {Container} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  }
}));


export interface BodyContainerProps {
  children: React.ReactNode;
}

const BodyContainer = ({children}: BodyContainerProps) => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        {children}
      </div>
    </Container>
  );
};

export default BodyContainer;