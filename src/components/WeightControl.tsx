import * as ROUTES from "../constants/routes";
import * as TYPES from "../types";
import ButtonSpacer from "./ButtonSpacer";
import CancelIcon from "@material-ui/icons/Cancel";
import DateFnsUtils from "@date-io/date-fns";
import React, {ChangeEvent, useState} from "react";
import SaveIcon from "@material-ui/icons/Save";
import {Button, Grid, TextField,} from "@material-ui/core";
import {KeyboardDateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {Link} from "react-router-dom";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";


interface WeightControlProps {
  date?: Date;
  weight?: number;
  onSave: (weight: TYPES.Weight) => void;
}


const WeightControl = ({
                         date = new Date(),
                         weight = 0,
                         onSave
                       }: WeightControlProps) => {

  const [updatedDate, setUpdatedDate] = useState(date);
  const [updatedWeight, setUpdatedWeight] = useState(weight);

  const handleSetTime = (newTime?: MaterialUiPickersDate) => {
    if (newTime) {
      setUpdatedDate(newTime);
    }
  };

  const handleSetWeight = (e: ChangeEvent<{ value: unknown }>) => {
    setUpdatedWeight(e.target.value as number);
  };

  const handleSave = () => onSave({
    date: updatedDate,
    weight: updatedWeight
  });

  return (
    <Grid container direction="row" justify="center" spacing={3}>
      <Grid item xs={12} md={6}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDateTimePicker
            label="Weigh Time"
            onChange={handleSetTime}
            value={updatedDate}
            variant="inline"
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Weight (lbs)"
          onChange={handleSetWeight}
          type="number"
          value={updatedWeight}
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

export default WeightControl;
