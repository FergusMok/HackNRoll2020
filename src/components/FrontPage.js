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
    bottom: theme.spacing(4),
    right: theme.spacing(6),
  },
  absoluteLogin: {
    position: "absolute",
    right: theme.spacing(6),
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
        <img
          src={Image}
          width="100%"
          overflow="auto"
          style={{ position: "relative" }}
        />
        <Button
          variant="contained"
          color="red"
          style={{ position: "absolute" }}
          onClick={onClickRegister}
        >
          Register a new account!
        </Button>
        <Button
          variant="contained"
          color="Blue"
          style={{ position: "absolute" }}
          onClick={onClickLogin}
        >
          Log in!
        </Button>
      </Paper>
    </div>
  );
};

export default FrontPage;
