import {Button, Typography} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import ButtonHeader from "../ButtonHeader";
import ScheduleTable from "./ScheduleTable";
import schedule from "../../constants/schedule";

const ScheduleTracker = () => {
  return (
    <div>
      <Typography variant="h5">
        <i className="fas fa-calendar-week"/>&nbsp; Schedule
      </Typography>
      <ScheduleTable schedule={schedule}/>
    </div>
  )
};

export default ScheduleTracker;
