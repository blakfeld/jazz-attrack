import * as COLLECTIONS from '../constants/collections';
import * as ROUTES from '../constants/routes';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, {useEffect, useState} from "react";
import moment from "moment";
import {FeedingUnit} from "../enums";
import {Feeding} from "../types";
import {Link} from "react-router-dom";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {makeStyles} from "@material-ui/core/styles";
import {store} from "../services/firebase";
import {
  Button,
  createStyles,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    width: '100%',
  },
}));


const FeedingTracker = () => {
  const [feedings, setFeedings] = useState<Feeding[]>([]);

  const classes = useStyles();

  useEffect(() => {
    store.collection(COLLECTIONS.FEEDINGS)
      .orderBy("time", "desc")
      .get()
      .then((snapshot) => {
        const records: Feeding[] = []
        snapshot.forEach((snap) => {
          const {time, ...rest} = snap.data();
          records.push({
            id: snap.id,
            time: new Date(time * 1000),
            ...rest
          } as Feeding)
        });
        setFeedings(records);
      })
      .catch((error) => console.log('ERROR LOADING FEEDINGS: ', error));
  }, []);

  const rows = feedings.map((feeding) => {
    const {amount, time, type, units, id} = feeding;
    const formattedTime = moment(time)
      .utc()
      .local()
      .format('MMM D YYYY H:mma')
    const amountInMl = units === FeedingUnit.OZ
      ? Math.floor(amount * 30)
      : amount;

    return (
      <TableRow key={id}>
        <TableCell align="left">
          {formattedTime}
        </TableCell>
        <TableCell align="right">
          {amountInMl}
        </TableCell>
        <TableCell align="right" style={{textTransform: 'capitalize'}}>
          {type}
        </TableCell>
        <TableCell align="right">
          <IconButton
            component={Link}
            to={`${ROUTES.NEW_FEEDING}/${feeding.id}`}
          >
            <EditIcon/>
          </IconButton>
          <IconButton>
            <DeleteIcon/>
          </IconButton>
        </TableCell>
      </TableRow>
    );
  })

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <Typography variant="h6">
            <i className="fas fa-utensils-alt"/>&nbsp; Feedings
          </Typography>
        </div>
        <div>
          <Button
            color="primary"
            component={Link}
            startIcon={<AddIcon/>}
            to={ROUTES.NEW_FEEDING}
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
                <strong>Amount (ml)</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Type</strong>
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

export default FeedingTracker;