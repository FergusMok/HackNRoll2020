import React from "react";
import Album from "../Album.js";
import Titlebar from "../Titlebar.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

const NewItem = () => {
  const user = JSON.parse(sessionStorage.getItem("userInfo"));
  console.log(user);
  const classes = useStyles();
  return (
    <div style={{ display: "flex" }}>
      <Titlebar name={"Main Page"} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Album />
      </main>
    </div>
  );
};

export default NewItem;
