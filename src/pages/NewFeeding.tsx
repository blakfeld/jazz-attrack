import * as COLLECTIONS from '../constants/collections';
import * as ROUTES from '../constants/routes';
import BasePage from "../components/Base/BasePage";
import FeedingControl from "../components/FeedingControl";
import React, {useState} from "react";
import {Feeding} from "../types";
import {Grid, Typography} from "@material-ui/core";
import {Redirect} from "react-router-dom";
import {store} from "../services/firebase";


const NewFeeding = () => {
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (saveSuccess) {
    return <Redirect to={ROUTES.HOME}/>
  }

  const handleSave = (feeding: Feeding) => {
    const {time, ...rest} = feeding;
    const unixTime = Math.floor(time.getTime() / 1000);

    const payload = {
      time: unixTime,
      ...rest
    }

    store.collection(COLLECTIONS.FEEDINGS)
      .add(payload)
      .then(() => setSaveSuccess(true))
      .catch((error) => console.log("ERROR SAVING FEEDING: ", error));
  };

  return (
    <BasePage>
        <Grid container direction="row" justify="center" spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">
              <i className="fas fa-utensils-alt"/>&nbsp; New Feeding
            </Typography>
          </Grid>
        </Grid>
      <FeedingControl onSave={handleSave}/>
    </BasePage>
  );
};

export default NewFeeding;