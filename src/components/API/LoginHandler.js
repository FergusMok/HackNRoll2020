import axios from "axios";
import { isValid } from "./API";

export const backendURL = "http//localhost:8080";

let userinfo = {};

export async function logoutUser() {
  sessionStorage.removeItem("access_token");
}

export async function signup(username, telegramID, password, callback) {
  const actualURL = backendURL + "/signup";

  const params = new URLSearchParams();
  params.append("username", username);
  params.append("telegramID", telegramID);
  params.append("password", password);

  axios({
    method: "post",
    url: actualURL,
    data: params,
    withCredentials: true,
  })
    .then((response) => callback(response.data))
    .catch((Error) => console.log(Error));
}

export async function login(username, password, callback) {
  const actualURL = backendURL + "/login";

  const params = new URLSearchParams();
  params.append("username", username);
  params.append("password", password);

  axios({
    method: "post",
    url: actualURL,
    data: params,
    withCredentials: true,
  })
    .then((response) => {
      sessionStorage.setItem("access_token", response.data.token);
      sessionStorage.setItem("user_id", response.data.user.id);
      callback(response.data.user);
    })
    .catch((Error) => console.log(Error));
}
