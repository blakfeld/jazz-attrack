import {IconButton, TableCell, TableRow} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import React from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {FeedingUnit} from "../../enums";
import {Feeding} from "../../types";

interface FeedingRowProps {
  feeding: Feeding;
}


const FeedingTableRow = ({feeding}: FeedingRowProps) => {
  const {amount, id, time, type, units} = feeding;
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
};


export default FeedingTableRow;