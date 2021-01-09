import axios from "axios";
import { backendURL, logoutUser } from "./LoginHandler";

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
      if (response.data === undefined) {
        logoutUser();
      } else {
        callback(response.data);
      }
    })
    .catch((Error) => console.log(Error));
}

export async function activeRequests(callback) {
  const actualURL = backendURL + "/social/search";

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
      if (response.data === "") {
        logoutUser();
      } else {
        console.log(response);
        console.log(response.data);
        callback(response.data);
      }
    })
    .catch((Error) => console.log(Error));
}

export async function matchUser(id, callback) {
  const actualURL = backendURL + "/social/match";

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
      if (response.data === "") {
        logoutUser();
      } else {
        console.log(response.data);
        callback(response.data);
      }
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
      if (response.data === "") {
        logoutUser();
      } else {
        console.log(response.data);
        callback(response.data);
      }
    })
    .catch((Error) => console.log(Error));
}

export function postNewSocialRequest(title, description, category, callback) {
  const actualURL = backendURL + "/social/addcat";

  const params = new URLSearchParams();
  params.append("user_id", sessionStorage.getItem("user_id"));
  params.append("access_token", sessionStorage.getItem("access_token"));
  params.append("title", title);
  params.append("description", description);
  params.append("category", category);

  axios({
    method: "post",
    url: actualURL,
    data: params,
    withCredentials: true,
  })
    .then((response) => {
      if (response.data === "") {
        logoutUser();
      } else {
        console.log(response.data);
        callback(response.data);
      }
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
      if (response.data === "") {
        logoutUser();
      } else {
        console.log(response.data);
        callback(response.data);
      }
    })
    .catch((Error) => console.log(Error));
}

export function getRequest(callback) {
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
      if (response.data === "") {
        logoutUser();
      } else {
        console.log(response.data);
        callback(response.data);
      }
    })
    .catch((Error) => console.log(Error));
}
