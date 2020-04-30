import {IconButton, TableCell, TableRow} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import React from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {Weight} from "../../types";


interface WeightTableRowProps {
  weighIn: Weight;
}


const WeightTableRow = ({weighIn}: WeightTableRowProps) => {
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
};


export default WeightTableRow;