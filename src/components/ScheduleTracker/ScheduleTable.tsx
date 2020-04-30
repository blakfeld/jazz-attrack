import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import React from "react";
import {Schedule} from "../../types";
import ScheduleTableRow from "./ScheduleTableRow";


interface ScheduleTableProps {
  schedule: Schedule[];
}

const ScheduleTable = ({schedule}: ScheduleTableProps) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <strong>Start Time</strong>
          </TableCell>
          <TableCell>
            <strong>Task</strong>
          </TableCell>
          <TableCell>
            <strong>On Duty</strong>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {schedule.map(s => <ScheduleTableRow scheduleEntry={s}/>)}
      </TableBody>
    </Table>
  </TableContainer>
);


export default ScheduleTable;