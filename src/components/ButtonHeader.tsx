import {Button, Grid, Typography} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";


interface ButtonHeaderProps {
  button: React.ReactNode;
  children: React.ReactNode;
}


const ButtonHeader = ({button, children}: ButtonHeaderProps) => (
  <div style={{display: "flex", justifyContent: "space-between"}}>
    <Typography variant="h5">
      {children}
    </Typography>
    {button}
  </div>
);


export default ButtonHeader;

