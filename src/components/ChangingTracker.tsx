import moment from "moment";
import * as ROUTES from '../constants/routes';
import * as COLLECTIONS from '../constants/collections';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {
  Button,
  Checkbox,
  createStyles,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer, TableHead, TableRow,
  Typography
} from "@material-ui/core";
import {store} from "../services/firebase";
import {Changing} from "../types";


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    width: '100%',
  },
}))

const ChangingTracker = () => {
  const [changings, setChangings] = useState<Changing[]>([]);

  const classes = useStyles();

  useEffect(() => {
    store.collection(COLLECTIONS.CHANGINGS)
      .orderBy("time", "desc")
      .get()
      .then((snapshot) => {
        const records: Changing[] = [];
        snapshot.forEach((snap) => {
          const {time, ...rest} = snap.data();
          records.push({
            id: snap.id,
            time: new Date(time * 1000),
            ...rest
          } as Changing)
        });
        setChangings(records);
      })
      .catch((error) => console.log('ERROR LOADING CHANGINGS: ', error));
  }, [])

  const rows = changings.map((changing) => {
    const {id, pee, poop, time} = changing;
    const formattedTime = moment(time)
      .utc()
      .local()
      .format('MMM D YYYY H:mma');

    return (
      <TableRow key={id}>
        <TableCell align="left">
          {formattedTime}
        </TableCell>
        <TableCell align="right">
          <Checkbox checked={poop}/>
        </TableCell>
        <TableCell align="right">
          <Checkbox checked={pee}/>
        </TableCell>
        <TableCell align="right">
          <IconButton
            component={Link}
            to={`${ROUTES.NEW_CHANGING}/${id}`}
          >
            <EditIcon/>
          </IconButton>
          <IconButton>
            <DeleteIcon/>
          </IconButton>
        </TableCell>
      </TableRow>
    )
  })

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <Typography variant="h6">
            <i className="fad fa-baby"/>&nbsp; Changings
          </Typography>
        </div>
        <div>
          <Button
            color="primary"
            component={Link}
            startIcon={<AddIcon/>}
            to={ROUTES.NEW_CHANGING}
            variant="contained"
          >
            Add
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
              <TableCell align="right">
                <strong>Poop</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Pee</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default ChangingTracker;
