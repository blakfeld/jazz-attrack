import {Button, Typography} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as COLLECTIONS from '../../constants/collections';
import * as ROUTES from '../../constants/routes';
import {store} from "../../services/firebase";
import {Changing} from "../../types";
import ChangingTable from "./ChangingTable";


const ChangingTracker = () => {
  const [changings, setChangings] = useState<Changing[]>([]);

  useEffect(() => {
    store.collection(COLLECTIONS.CHANGINGS)
      .orderBy("time", "desc")
      .get()
      .then((snapshot) => {
        const records: Changing[] = [];
        snapshot.forEach((snap) => {
          const {time, ...rest} = snap.data();
          records.push({
            id: snap.id,
            time: new Date(time * 1000),
            ...rest
          } as Changing)
        });
        setChangings(records);
      })
      .catch((error) => console.log('ERROR LOADING CHANGINGS: ', error));
  }, [])

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <Typography variant="h6">
            <i className="fad fa-baby"/>&nbsp; Changings
          </Typography>
        </div>
        <div>
          <Button
            color="primary"
            component={Link}
            startIcon={<AddIcon/>}
            to={ROUTES.NEW_CHANGING}
            variant="contained"
          >
            Add
          </Button>
        </div>
      </div>
      <ChangingTable changings={changings}/>
    </div>
  )
};

export default ChangingTracker;
