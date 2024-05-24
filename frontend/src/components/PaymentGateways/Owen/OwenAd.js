import React, { useEffect, useState, useRef } from "react";

import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((_) => ({
  fieldContainer: {
    width: "100%",
    textAlign: "left",
  },
  
  uploadInput: {
    display: "none",
  },
}));

export default function OwenAd(props) {
  const classes = useStyles();
  const [owenSettings, setOwenSettings] = useState({});

  useEffect(() => {
  }, []);

  return (
    <>
    
    </>
  );
}
