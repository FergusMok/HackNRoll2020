import axios from "axios";
import { isValid } from "./API";

const backendURL = "https://cc-contest-arena-backend.herokuapp.com/api";

let userinfo = {};

export async function logoutUser() {
  console.log("LOGOUT CALLED");
  sessionStorage.setItem("access_token", -1);
  axios.get(backendURL + "/logout", { withCredentials: true }).then((response) => {
    userinfo = {};
    console.log(response);
  });
}

export function getUserDetails(callback) {
  //if (isLoggedIn() && sessionStorage.getItem("userdetails") !== undefined) {
  //callback(sessionStorage.getItem("userdetails"));
  //return;
  //}
  console.log("OOF");
  axios.get(backendURL + "/userinfo", { withCredentials: true }).then((response) => {
    if (!isValid(response)) logoutUser();
    else {
      userinfo = response.data;
      sessionStorage.setItem("LoggedIn", "true");
      sessionStorage.setItem("userdetails", userinfo.username);
    }
    console.log(userinfo);
    callback(userinfo);
  });
}

export function getUsername() {
  console.log(sessionStorage.getItem("userdetails"));
  if (isLoggedIn() && sessionStorage.getItem("userdetails") != null) return sessionStorage.getItem("userdetails");
  else return "";
}

export function isLoggedIn() {
  return sessionStorage.getItem("LoggedIn") === "true";

  // axios
  //   .get(backendURL + "/loggedinstatus", { withCredentials: true })
  //   .then((promise) => {
  //     console.log(promise);
  //     if (promise.data === "x") callback(1);
  //     else callback(2);
  //   })
  //   .catch((Error) => {
  //     console.log(Error);
  //   });
  // //return loggedInStatus;
}
