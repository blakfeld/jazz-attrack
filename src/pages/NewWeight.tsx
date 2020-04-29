import * as COLLECTIONS from "../constants/collections";
import * as ROUTES from "../constants/routes";
import BasePage from "../components/BasePage";
import React, {useState} from "react";
import WeightControl from "../components/WeightControl";
import {Grid, Typography} from "@material-ui/core";
import {Redirect} from "react-router-dom";
import {Weight} from "../types";
import {store} from "../services/firebase";


const NewWeight = () => {
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (saveSuccess) {
    return <Redirect to={ROUTES.HOME}/>
  }

  const handleSave = (weight: Weight) => {
    const {date, ...rest} = weight;
    const unixTime = Math.floor(date.getTime() / 1000);

    const payload = {
      date: unixTime,
      ...rest
    };

    store.collection(COLLECTIONS.WEIGHT)
      .add(payload)
      .then(() => setSaveSuccess(true))
      .catch((error) => console.log("ERROR SAVING WEIGHT: ", error));
  };

  return (
    <BasePage>
      <Grid container direction="row" justify="center" spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">
            <i className="fas fa-balance-scale-right"/>&nbsp; New Weight
          </Typography>
        </Grid>
      </Grid>
      <WeightControl onSave={handleSave}/>
    </BasePage>
  );
};


export default NewWeight;