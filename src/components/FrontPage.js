import "./CSS/FrontPage.css";
import React from "react";
import Paper from "@material-ui/core/Paper";

const IMAGE_LINK =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80";

const styles = {
  paperContainer: {
    height: 1356,
    backgroundImage: `url(${IMAGE_LINK})`,
    backgroundSize: "contain",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },
  descriptionCard: {
    backgroundImage: `url(${IMAGE_LINK})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: "auto",
  },
  styling: {
    backgroundImage: `url(${IMAGE_LINK})`,
  },
};

const FrontPage = () => {
  /*   const sectionStyle = {
    flex: 1,
    backgroundImage: `url(${IMAGE_LINK})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    resizeMode: "stretch",
  };

 */
  return <div style={styles.paperContainer}></div>;
};

export default FrontPage;
