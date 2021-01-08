import "./CSS/FrontPage.css";
import React from "react";

const IMAGE_LINK =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80";

const FrontPage = () => {
  return (
    <div>
      <img style={{ width: "100%", objectFit: "cover" }} src={IMAGE_LINK} />
    </div>
  );
};

export default FrontPage;
