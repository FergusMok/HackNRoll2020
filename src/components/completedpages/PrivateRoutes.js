import { redirectingFnPrivatePath } from "../API/LoginHandler";
import React from "react";

// Handles all routes that are not specified! Scams

const PrivateRoutes = () => {
  return redirectingFnPrivatePath();
};

export default PrivateRoutes;
