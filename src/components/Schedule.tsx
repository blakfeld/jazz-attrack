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
import {makeStyles, Theme} from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    width: '100%',
  },
}))

const Schedule = () => {
  const classes = useStyles();

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <Typography variant="h6">
           Schedule
          </Typography>
        </div>
        <div>
          <Button variant="contained" color="primary">
            <EditIcon/> Edit
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
              <strong>Task</strong>
            </TableCell>
            <TableCell>
              <strong>On Duty</strong>
            </TableCell>
          </TableHead>
          <TableBody>
            <TableCell>3am - 6am</TableCell>
            <TableCell>Feeding</TableCell>
            <TableCell>Dani</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default Schedule;
