import * as COLLECTIONS from "../constants/collections";
import * as ROUTES from "../constants/routes";
import BasePage from "../components/Base/BasePage";
import ChangingControl from "../components/ChangingControl";
import React, {useState} from "react";
import {Changing} from "../types";
import {Grid, Typography} from "@material-ui/core";
import {Redirect} from "react-router-dom";
import {store} from "../services/firebase";


const NewChanging = () => {
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (saveSuccess) {
    return <Redirect to={ROUTES.HOME}/>
  }

  const handleSave = (changing: Changing) => {
    const {time, ...rest} = changing;
    const unixTime = Math.floor(time.getTime() / 1000);

    const payload = {
      time: unixTime,
      ...rest
    };

    store.collection(COLLECTIONS.CHANGINGS)
      .add(payload)
      .then(() => setSaveSuccess(true))
      .catch((error) => console.log("ERROR SAVING CHANGING: ", error));
  };

  return (
    <BasePage>
      <Grid container direction="row" justify="center" spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">
            <i className="fas fa-baby"/>&nbsp; New Changing
          </Typography>
        </Grid>
      </Grid>
      <ChangingControl onSave={handleSave}/>
    </BasePage>
  );
};

export default NewChanging;
