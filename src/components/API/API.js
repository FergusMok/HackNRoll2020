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

export async function requestsMadeByUser(callback) {
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

export function postNewSocialRequest(title, description, callback) {
  const actualURL = backendURL + "/social/add";

  const params = new URLSearchParams();
  params.append("user_id", sessionStorage.getItem("user_id"));
  params.append("access_token", sessionStorage.getItem("access_token"));
  params.append("title", title);
  params.append("description", description);

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

export function getRequestInformation(id, callback) {
  const actualURL = backendURL + "/social/matchesrequest";

  const params = new URLSearchParams();
  params.append("user_id", sessionStorage.getItem("user_id"));
  params.append("access_token", sessionStorage.getItem("access_token"));
  params.append("request_id", id);

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
