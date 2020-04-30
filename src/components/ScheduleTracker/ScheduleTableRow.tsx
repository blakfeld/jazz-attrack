import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {Schedule} from "../../types";


interface ScheduleTableRowProps {
  scheduleEntry: Schedule;
}


const ScheduleTableRow = ({scheduleEntry}: ScheduleTableRowProps) => {
  const {onDuty, task, time} = scheduleEntry;

  return (
    <TableRow key={time}>
      <TableCell>{time}</TableCell>
      <TableCell>{task}</TableCell>
      <TableCell>
        <span style={{textTransform: 'capitalize'}}>
          {onDuty}
        </span>
      </TableCell>
    </TableRow>
  );
};


export default ScheduleTableRow;