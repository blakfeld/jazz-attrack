import {createStyles, Modal, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from 'react';


export interface BaseModalProps {
  children: React.ReactNode,
  onClose: () => void;
  open: boolean;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    left: '50%',
    padding: theme.spacing(3, 4, 3),
    position: 'absolute' as 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
  },
}));

const BaseModal = ({children, onClose, open}: BaseModalProps) => {
  const classes = useStyles();

  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.paper}>
        {children}
      </div>
    </Modal>
  );
};

export default BaseModal;