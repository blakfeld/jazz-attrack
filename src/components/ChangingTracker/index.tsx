import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as COLLECTIONS from '../../constants/collections';
import * as ROUTES from '../../constants/routes';
import {store} from "../../services/firebase";
import {Changing} from "../../types";
import ButtonHeader from "../ButtonHeader";
import ChangingTable from "./ChangingTable";


const ChangingTracker = () => {
  const [changings, setChangings] = useState<Changing[]>([]);

  useEffect(() => {
    store.collection(COLLECTIONS.CHANGINGS)
      .orderBy("time", "desc")
      .limit(10)
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
      <ButtonHeader
        button={
          <Button
            color="primary"
            component={Link}
            startIcon={<AddIcon/>}
            to={ROUTES.NEW_CHANGING}
            variant="contained"
          >
            Add
          </Button>
        }
      >
        <i className="fad fa-baby"/>&nbsp; Changings
      </ButtonHeader>
      <ChangingTable changings={changings}/>
    </div>
  )
};

export default ChangingTracker;
