import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxHeight: 100,
    position: "relative",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    right: "25px",
  },
  status: {
    position: "absolute",
    top: "15px",
    right: "50px",
  },
  itembutton: {
    position: "absolute",
    top: "50px",
    right: "50px",
  },
});

export default function RectangleUsers({ user }) {
  const classes = useStyles();

  // CHANGE WHEN API COMES
  console.log(user);

  return (
    <Card className={classes.root} style={{ backgroundColor: "#E5F9E7" }}>
      <CardContent>
        <Typography
          className={classes.status}
          color="textSecondary"
          gutterBottom
        >
          Applicant
        </Typography>
        <Typography variant="h5" component="h2">
          Applicant Name : {user.username}
        </Typography>
        <Typography className={classes.pos} variant="h5" component="h2">
          Contact via Telegram at : {user.telegramID}
        </Typography>
      </CardContent>
    </Card>
  );
}
