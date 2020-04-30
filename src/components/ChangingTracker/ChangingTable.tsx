import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import React from "react";
import {Changing} from "../../types";
import ChangingTableRow from "./ChangingTableRow";


interface ChangingTableProps {
  changings: Changing[];
}


const ChangingTable = ({changings}: ChangingTableProps) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
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
        {changings.map(c => <ChangingTableRow changing={c}/>)}
      </TableBody>
    </Table>
  </TableContainer>
);


export default ChangingTable;