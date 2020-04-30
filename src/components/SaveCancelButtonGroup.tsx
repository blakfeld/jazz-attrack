import {Button} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";
import React from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../constants/routes";
import ButtonSpacer from "./ButtonSpacer";


interface SaveCancelButtonGroupProps {
  floatRight?: boolean;
  onSave: () => void;
}

const SaveCancelButtonGroup = ({floatRight, onSave}: SaveCancelButtonGroupProps) => {
  const buttonGroup = (
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
        onClick={onSave}
        startIcon={<SaveIcon/>}
        variant="contained"
      >
        Save
      </Button>
    </ButtonSpacer>
  );

  if (floatRight) {
    return (
      <div style={{float: "right"}}>
        {buttonGroup}
      </div>
    );
  } else {
    return buttonGroup;
  }
};


export default SaveCancelButtonGroup;