import * as COLLECTIONS from "../../constants/collections";
import * as ROUTES from "../../constants/routes";
import AddIcon from "@material-ui/icons/Add";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Weight} from "../../types";
import {store} from "../../services/firebase";
import {Button} from "@material-ui/core";
import ButtonHeader from "../ButtonHeader";
import WeightTable from "./WeightTable";


const WeightTracker = () => {
  const [weighIns, setWeights] = useState<Weight[]>([]);

  useEffect(() => {
    store.collection(COLLECTIONS.WEIGHT)
      .orderBy("date", "desc")
      .get()
      .then((snapshot) => {
        const records: Weight[] = [];
        snapshot.forEach((snap) => {
          const {date, ...rest} = snap.data();
          records.push({
            id: snap.id,
            date: new Date(date * 1000),
            ...rest
          } as Weight);
        });

        setWeights(records);
      });
  }, []);


  return (
    <div>
      <ButtonHeader
        button={
          <Button
            color="primary"
            component={Link}
            startIcon={<AddIcon/>}
            to={ROUTES.NEW_WEIGHT}
            variant="contained"
          >
            Add
          </Button>
        }
      >
        <i className="fas fa-balance-scale-right"/>&nbsp; Weight
      </ButtonHeader>
      <WeightTable weighIns={weighIns}/>
    </div>
  )
};

export default WeightTracker;
