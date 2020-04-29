import * as ROUTES from "../constants/routes";
import * as TYPES from "../types";
import ButtonSpacer from "./ButtonSpacer";
import CancelIcon from "@material-ui/icons/Cancel";
import DateFnsUtils from "@date-io/date-fns";
import React, {ChangeEvent, useState} from "react";
import SaveIcon from "@material-ui/icons/Save";
import {KeyboardDateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {Link} from "react-router-dom";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import {
  Button, Checkbox,
  FormControlLabel,
  Grid,
} from "@material-ui/core";


interface ChangingControlProps {
  time?: Date;
  poop?: boolean;
  pee?: boolean;
  onSave: (changing: TYPES.Changing) => void;
}


const ChangingControl = ({
                           time = new Date(),
                           poop = false,
                           pee = false,
                           onSave
                         }: ChangingControlProps) => {

  const [updatedTime, setUpdatedTime] = useState(time);
  const [updatedPoop, setUpdatedPoop] = useState(poop);
  const [updatedPee, setUpdatedPee] = useState(pee);

  const handleSetTime = (newTime?: MaterialUiPickersDate) => {
    if (newTime) {
      setUpdatedTime(newTime);
    }
  };

  const handleSetPoop = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatedPoop(e.target.checked);
  };

  const handleSetPee = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatedPee(e.target.checked);
  };

  const handleSave = () => onSave({
    time: updatedTime,
    poop: updatedPoop,
    pee: updatedPee,
  });

  return (
    <Grid container direction="row" justify="center" spacing={3}>
      <Grid item xs={12} md={6}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDateTimePicker
            label="Changing Time"
            onChange={handleSetTime}
            value={updatedTime}
            variant="inline"
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={updatedPoop}
              onChange={handleSetPoop}
            />
          }
          label="Poop"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={updatedPee}
              onChange={handleSetPee}
            />
          }
          label="Pee"
        />
      </Grid>
      <Grid item xs={12}>
        <div style={{float: "right"}}>
          <ButtonSpacer>
            <Button
              color="secondary"
              component={Link}
              startIcon={<CancelIcon/>}
              to={ROUTES.HOME}
              variant="contained"
            >
              Cancel
            </Button>
            <Button
              color="primary"
              onClick={handleSave}
              startIcon={<SaveIcon/>}
              variant="contained"
            >
              Save
            </Button>
          </ButtonSpacer>
        </div>
      </Grid>
    </Grid>
  );

};

export default ChangingControl;
