import {IconButton, TableCell, TableRow} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import React from "react";
import {Weight} from "../../types";


interface WeightTableRowProps {
  onDelete: (id: string) => void;
  weighIn: Weight;
}


const WeightTableRow = ({onDelete, weighIn}: WeightTableRowProps) => {
  const {id, date, weight} = weighIn;
  const formattedDate = moment(date)
    .utc()
    .local()
    .format("MMM D YYYY H:mma");

  return (
    <TableRow key={id}>
      <TableCell>
        {formattedDate}
      </TableCell>
      <TableCell align="right">
        {`${weight} lbs`}
      </TableCell>
      <TableCell align="right">
        <IconButton
          onClick={(e) => onDelete(id as string)}
        >
          <DeleteIcon/>
        </IconButton>
      </TableCell>
    </TableRow>
  );
};


export default WeightTableRow;