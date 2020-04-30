import DateFnsUtils from "@date-io/date-fns";
import {Grid, Table, TableRow, TableCell, TableContainer, TableHead, Typography, TableBody} from "@material-ui/core";
import {KeyboardTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import KeyboardDateInput from "@material-ui/pickers/_shared/KeyboardDateInput";
import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import BasePage from "../components/BasePage";
import * as COLLECTIONS from "../constants/collections";
import * as ROUTES from "../constants/routes";
import {Parent} from "../enums";
import {store} from "../services/firebase";
import {Schedule} from "../types";


const EditSchedule = () => {
  const [saveSuccess, setSaveSuccess] = useState(false);
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

  if (saveSuccess) {
    return <Redirect to={ROUTES.HOME}/>
  }

  const handleSave = (schedule: Schedule) => {

  };

  return (
    <BasePage>
      <Grid container direction="row" justify="center" spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">
            <i className="fas fa-calendar-week"/>&nbsp; Edit Schedule
          </Typography>
        </Grid>
        <Grid item xs={12}>
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
                <TableRow>
                  <TableCell>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardTimePicker
                        ampm={true}
                        label="Start Time"
                        onChange={(e) => console.log(e)}
                        value={new Date()}
                        variant="inline"
                      />
                    </MuiPickersUtilsProvider>
                  </TableCell>
                  <TableCell>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardTimePicker
                        ampm={true}
                        label="End Time"
                        onChange={(e) => console.log(e)}
                        value={new Date()}
                        variant="inline"
                      />
                    </MuiPickersUtilsProvider>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </BasePage>
  );
};


export default EditSchedule;