import "./CSS/FrontPage.css";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Image from "./CSS/realbackground.jpg";

const IMAGE_LINK =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80";

const FrontPage = () => {
  return (
    <div>
      <Paper style={{ maxHeight: "100%", maxWidth: "100%" }} elevation={3}>
        <img src={Image} alt="Picture" width="100%" overflow="auto" />
      </Paper>
    </div>
  );
};

export default FrontPage;
