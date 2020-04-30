import DateFnsUtils from "@date-io/date-fns";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import {KeyboardTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import BasePage from "../components/Base/BasePage";
import ButtonHeader from "../components/ButtonHeader";
import SaveCancelButtonGroup from "../components/SaveCancelButtonGroup";
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
          <ButtonHeader
            button={
              <Button
                color="primary"
                startIcon={<AddIcon/>}
                variant="contained"
              >
                Add
              </Button>
            }
          >
            <i className="fas fa-calendar-week"/>&nbsp; Edit Schedule
          </ButtonHeader>
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
                  <TableCell>
                    <strong>Actions</strong>
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
                  <TableCell>
                    <FormControl>
                      <InputLabel>Parent</InputLabel>
                      <Select
                        onChange={(e) => console.log(e)}
                        value={Parent.KORY}
                      >
                        <MenuItem value={Parent.KORY}>Kory</MenuItem>
                        <MenuItem value={Parent.DANI}>Dani</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <IconButton>
                      <DeleteIcon/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <SaveCancelButtonGroup
            floatRight={true}
            onSave={() => console.log('foo')}
          />
        </Grid>
      </Grid>
    </BasePage>
  );
};


export default EditSchedule;