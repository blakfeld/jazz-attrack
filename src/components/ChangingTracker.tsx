import {
  Button, Checkbox,
  createStyles,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer, TableHead,
  Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {makeStyles, Theme} from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    width: '100%',
  },
}))

const ChangingTracker = () => {
  const classes = useStyles();

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <Typography variant="h6">
           Changings
          </Typography>
        </div>
        <div>
          <Button variant="contained" color="primary">
            <AddIcon/>
            Add
          </Button>
        </div>
      </div>
      <TableContainer className={classes.root}>
        <Table>
          <TableHead>
            <TableCell>
              <strong>Time</strong>
            </TableCell>
            <TableCell>
              <strong>Poop</strong>
            </TableCell>
            <TableCell>
              <strong>Pee</strong>
            </TableCell>
            <TableCell>
              <strong>Actions</strong>
            </TableCell>
          </TableHead>
          <TableBody>
            <TableCell>3am</TableCell>
            <TableCell><Checkbox checked={true}/></TableCell>
            <TableCell><Checkbox checked={true}/></TableCell>
            <TableCell>
              <IconButton>
                <EditIcon/>
              </IconButton>
              <IconButton>
                <DeleteIcon/>
              </IconButton>
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default ChangingTracker;
