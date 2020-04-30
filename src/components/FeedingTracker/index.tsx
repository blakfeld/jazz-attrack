import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as COLLECTIONS from '../../constants/collections';
import * as ROUTES from '../../constants/routes';
import {store} from "../../services/firebase";
import {Feeding} from "../../types";
import ButtonHeader from "../ButtonHeader";
import FeedingTable from "./FeedingTable";


const FeedingTracker = () => {
  const [feedings, setFeedings] = useState<Feeding[]>([]);

  useEffect(() => {
    store.collection(COLLECTIONS.FEEDINGS)
      .orderBy("time", "desc")
      .get()
      .then((snapshot) => {
        const records: Feeding[] = []
        snapshot.forEach((snap) => {
          const {time, ...rest} = snap.data();
          records.push({
            id: snap.id,
            time: new Date(time * 1000),
            ...rest
          } as Feeding)
        });
        setFeedings(records);
      })
      .catch((error) => console.log('ERROR LOADING FEEDINGS: ', error));
  }, []);

  return (
    <div>
      <ButtonHeader
        button={
          <Button
            color="primary"
            component={Link}
            startIcon={<AddIcon/>}
            to={ROUTES.NEW_FEEDING}
            variant="contained"
          >
            Add
          </Button>
        }
      >
        <i className="fas fa-utensils-alt"/>&nbsp; Feedings
      </ButtonHeader>
      <FeedingTable feedings={feedings}/>
    </div>
  );
};

export default FeedingTracker;
