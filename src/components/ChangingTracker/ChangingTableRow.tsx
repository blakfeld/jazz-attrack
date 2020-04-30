import {Checkbox, IconButton, TableCell, TableRow} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import React from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {Changing} from "../../types";


interface ChangingRowProps {
  changing: Changing;
}


const ChangingTableRow = ({changing}: ChangingRowProps) => {
  const {id, pee, poop, time} = changing;
  const formattedTime = moment(time)
    .utc()
    .local()
    .format('MMM D YYYY H:mma');

  return (
    <TableRow key={id}>
      <TableCell>
        {formattedTime}
      </TableCell>
      <TableCell align="right">
        <Checkbox checked={poop} disabled/>
      </TableCell>
      <TableCell align="right">
        <Checkbox checked={pee} disabled/>
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
};


export default ChangingTableRow;

