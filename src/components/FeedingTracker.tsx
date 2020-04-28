import {
  Button,
  createStyles,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer, TableHead,
  Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {makeStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    width: '100%',
  },
}))

const FeedingTracker = () => {
  const classes = useStyles();

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <Typography variant="h6">
            Feedings
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
              <strong>Amount (ml)</strong>
            </TableCell>
            <TableCell>
              <strong>Type</strong>
            </TableCell>
            <TableCell>
              <strong>Actions</strong>
            </TableCell>
          </TableHead>
          <TableBody>
            <TableCell>3am</TableCell>
            <TableCell>30ml</TableCell>
            <TableCell>Formula</TableCell>
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

export default FeedingTracker;