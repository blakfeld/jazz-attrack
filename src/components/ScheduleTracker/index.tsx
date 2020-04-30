import {Button, Typography} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as COLLECTIONS from "../../constants/collections";
import * as ROUTES from "../../constants/routes";
import {Parent} from "../../enums";
import {store} from "../../services/firebase";
import {Schedule} from "../../types";
import ScheduleTable from "./ScheduleTable";

const ScheduleTracker = () => {
  const [schedule, setSchedule] = useState<Schedule[]>([]);

  useEffect(() => {
    store.collection(COLLECTIONS.SCHEDULE)
      .orderBy("time")
      .get()
      .then((snapshot) => {
        const records: Schedule[] = [];
        snapshot.forEach((snap) => {
          const {startTime, endTime, onDuty} = snap.data();
          records.push({
            id: snap.id,
            startTime: new Date(startTime),
            endTime: new Date(endTime),
            onDuty: onDuty as Parent,
          });
          setSchedule(records);
        });
      });
  }, [])

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <Typography variant="h6">
            <i className="fas fa-calendar-week"/>&nbsp; Schedule
          </Typography>
        </div>
        <div>
          <Button
            color="primary"
            component={Link}
            startIcon={<EditIcon/>}
            to={ROUTES.EDIT_SCHEDULE}
            variant="contained"
          >
            Edit
          </Button>
        </div>
      </div>
      <ScheduleTable/>
    </div>
  )
};

export default ScheduleTracker;
