import moment from "moment";
import * as COLLECTIONS from "../constants/collections";
import * as ROUTES from "../constants/routes";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {Weight} from "../types";
import {makeStyles} from "@material-ui/core/styles";
import {store} from "../services/firebase";
import {
  Button,
  createStyles,
  IconButton,
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

const WeightTracker = () => {
  const [weights, setWeights] = useState<Weight[]>([]);

  const classes = useStyles();

  useEffect(() => {
    store.collection(COLLECTIONS.WEIGHT)
      .orderBy("date", "desc")
      .get()
      .then((snapshot) => {
        const records: Weight[] = [];
        snapshot.forEach((snap) => {
          const {date, ...rest} = snap.data();
          records.push({
            id: snap.id,
            date: new Date(date * 1000),
            ...rest
          } as Weight);
        });
        setWeights(records);
      });
  }, []);

  const rows = weights.map((w) => {
    const {id, date, weight} = w;
    const formattedDate = moment(date)
      .utc()
      .local()
      .format("MMM D YYYY H:mma");

    return (
      <TableRow key={id}>
        <TableCell align="left">
          {formattedDate}
        </TableCell>
        <TableCell align="right">
          {`${weight} lbs`}
        </TableCell>
        <TableCell align="right">
          <IconButton
            component={Link}
            to={`${ROUTES.NEW_WEIGHT}/${id}`}
          >
            <EditIcon/>
          </IconButton>
          <IconButton>
            <DeleteIcon/>
          </IconButton>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <Typography variant="h6">
            <i className="fas fa-balance-scale-right"/>&nbsp; Weight
          </Typography>
        </div>
        <div>
          <Button
            color="primary"
            component={Link}
            startIcon={<AddIcon/>}
            to={ROUTES.NEW_WEIGHT}
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
                <strong>Date</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Weight (lbs)</strong>
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

export default WeightTracker;
