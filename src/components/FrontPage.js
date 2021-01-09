import "./CSS/FrontPage.css";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Image from "./CSS/realbackground.jpg";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  absoluteRegister: {
    position: "absolute",
    left: "60vh",
    bottom: "20vh",
  },
  absoluteLogin: {
    position: "absolute",
    right: "60vh",
    bottom: "20vh",
  },
  textInput: {
    position: "absolute",
    left: "30vh",
    top: "15vh",
    fontSize: "100px",
    font: "Roboto",
  },
}));

const FrontPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const onClickRegister = () => {
    history.push("/signup");
  };
  const onClickLogin = () => {
    history.push("/signin");
  };

  return (
    <div>
      <Paper style={{ maxHeight: "100%", maxWidth: "100%" }} elevation={3}>
        <img src={Image} width="100%" overflow="auto" style={{ position: "relative" }} />
        <Button variant="contained" color="red" className={classes.absoluteRegister} onClick={onClickRegister}>
          Register a new account!
        </Button>
        <Button variant="contained" color="Blue" className={classes.absoluteLogin} onClick={onClickLogin}>
          Log in!
        </Button>
        <p className={classes.textInput}> Find Friends and Rent Items </p>
      </Paper>
    </div>
  );
};

export default FrontPage;
