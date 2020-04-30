import * as ROUTES from '../constants/routes';
import * as TYPES from '../types';
import CancelIcon from "@material-ui/icons/Cancel";
import DateFnsUtils from "@date-io/date-fns";
import React, {ChangeEvent, useState} from "react";
import SaveIcon from "@material-ui/icons/Save";
import {FeedingType, FeedingUnit} from "../enums";
import {KeyboardDateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {Link} from "react-router-dom";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField
} from "@material-ui/core";
import ButtonSpacer from "./ButtonSpacer";
import SaveCancelButtonGroup from "./SaveCancelButtonGroup";


interface FeedingControlProps {
  amount?: number;
  time?: Date;
  type?: FeedingType;
  units?: FeedingUnit;
  onSave: (feeding: TYPES.Feeding) => void;
}

const FeedingControl = ({
                          amount = 0,
                          time = new Date(),
                          type = FeedingType.FORMULA,
                          units = FeedingUnit.ML,
                          onSave
                        }: FeedingControlProps) => {

  const [updatedAmount, setUpdatedAmount] = useState(amount);
  const [updatedTime, setUpdatedTime] = useState(time);
  const [updatedType, setUpdatedType] = useState(type);
  const [updatedUnits, setUpdatedUnits] = useState(units);

  const handleSetAmount = (e: ChangeEvent<{ value: unknown }>) => {
    setUpdatedAmount(e.target.value as number);
  };

  const handleSetTime = (newTime?: MaterialUiPickersDate) => {
    if (newTime) {
      setUpdatedTime(newTime);
    }
  };

  const handleSetType = (e: ChangeEvent<{ value: unknown }>) => {
    setUpdatedType(e.target.value as FeedingType);
  };

  const handleSetUnits = (e: ChangeEvent<{ value: unknown }>) => {
    setUpdatedUnits(e.target.value as FeedingUnit);
  };

  const handleSave = () => onSave({
    amount: updatedAmount,
    time: updatedTime,
    type: updatedType,
    units: updatedUnits,
  });

  return (
    <Grid container direction="row" justify="center" spacing={3}>
      <Grid item xs={12} md={4}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDateTimePicker
            ampm={true}
            label="Feeding Time"
            onChange={handleSetTime}
            value={updatedTime}
            variant="inline"
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          label="Amount"
          onChange={handleSetAmount}
          type="number"
          value={updatedAmount}
        />
        <RadioGroup
          defaultValue={updatedUnits}
          onChange={handleSetUnits}
          row={true}
        >
          <FormControlLabel
            control={<Radio/>}
            label="ml"
            value={FeedingUnit.ML}
          />
          <FormControlLabel
            control={<Radio/>}
            label="oz"
            value={FeedingUnit.OZ}
          />
        </RadioGroup>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl>
          <InputLabel>Type</InputLabel>
          <Select
            label="Type"
            onChange={handleSetType}
            value={updatedType}
          >
            <MenuItem value={FeedingType.FORMULA}>Formula</MenuItem>
            <MenuItem value={FeedingType.BREAST_MILK}>Breast Milk</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <SaveCancelButtonGroup
          floatRight={true}
          onSave={handleSave}
        />
      </Grid>
    </Grid>
  );
};

export default FeedingControl;