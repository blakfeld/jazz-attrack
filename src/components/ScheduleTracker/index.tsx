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
      <ButtonHeader
        button={
          <Button
            color="primary"
            component={Link}
            startIcon={<EditIcon/>}
            to={ROUTES.EDIT_SCHEDULE}
            variant="contained"
          >
            Edit
          </Button>
        }
      >
        <i className="fas fa-calendar-week"/>&nbsp; Schedule
      </ButtonHeader>
      <ScheduleTable schedule={schedule}/>
    </div>
  )
};

export default ScheduleTracker;
