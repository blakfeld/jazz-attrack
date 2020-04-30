import {Checkbox, IconButton, TableCell, TableRow} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import React from "react";
import {Changing} from "../../types";


interface ChangingRowProps {
  changing: Changing;
  onDelete: (id: string) => void;
}


const ChangingTableRow = ({changing, onDelete}: ChangingRowProps) => {
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
          onClick={(e) => onDelete(id as string)}
        >
          <DeleteIcon/>
        </IconButton>
      </TableCell>
    </TableRow>
  )
};


export default ChangingTableRow;

