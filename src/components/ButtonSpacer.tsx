import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import React, {ReactNode} from 'react';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

interface ButtonSpacerProps {
  children: ReactNode;
}

const ButtonSpacer = ({children}: ButtonSpacerProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default ButtonSpacer;
