import * as ROUTES from "../constants/routes";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import {Link} from "react-router-dom";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {
  Button,
  createStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer, TableHead, TableRow,
  Typography
} from "@material-ui/core";


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
            <i className="fas fa-calendar-week"/>&nbsp; Schedule
          </Typography>
        </div>
        <div>
          <Button
            color="primary"
            component={Link}
            startIcon={<EditIcon/>}
            to={ROUTES.EDIT_SCHEDULE}
            variant="contained"
          >
            Edit
          </Button>
        </div>
      </div>
      <TableContainer className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <strong>Time</strong>
              </TableCell>
              <TableCell align="left">
                <strong>On Duty</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">3am - 6am</TableCell>
              <TableCell align="left">Dani</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default Schedule;
