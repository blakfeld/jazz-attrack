import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import React from "react";
import {Weight} from "../../types";
import WeightTableRow from "./WeightTableRow";


interface WeightTableProps {
  weighIns: Weight[];
}


const WeightTable = ({weighIns}: WeightTableProps) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
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
        {weighIns.map(w => <WeightTableRow weighIn={w}/>)}
      </TableBody>
    </Table>
  </TableContainer>
);


export default WeightTable;