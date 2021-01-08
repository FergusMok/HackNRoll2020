import axios from "axios";
import { backendURL } from "./LoginHandler";

export function dashboard(callback) {
  const actualURL = backendURL + "/dashboard";

  const params = new URLSearchParams();
  params.append("user_id", sessionStorage.getItem("user_id"));
  params.append("access_token", sessionStorage.getItem("access_token"));

  axios({
    method: "post",
    url: actualURL,
    data: params,
    withCredentials: true,
  })
    .then((response) => {
      callback(response.data);
    })
    .catch((Error) => console.log(Error));
}

export function requestsMadeByUser(callback) {
  const actualURL = backendURL + "/social/requestsMade";

  const params = new URLSearchParams();
  params.append("user_id", sessionStorage.getItem("user_id"));
  params.append("access_token", sessionStorage.getItem("access_token"));

  axios({
    method: "post",
    url: actualURL,
    data: params,
    withCredentials: true,
  })
    .then((response) => {
      console.log(response.data);
      callback(response.data);
    })
    .catch((Error) => console.log(Error));
}
