import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import React from "react";
import ScheduleTableRow from "./ScheduleTableRow";


const ScheduleTable = () => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <strong>Start Time</strong>
          </TableCell>
          <TableCell>
            <strong>End Time</strong>
          </TableCell>
          <TableCell>
            <strong>On Duty</strong>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <ScheduleTableRow/>
      </TableBody>
    </Table>
  </TableContainer>
);


export default ScheduleTable;