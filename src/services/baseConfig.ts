import * as axios from "axios";
import { config } from "../config";
import { AUTH_TOKEN_KEY } from "../hooks/useAuth/useAuth.hook";

export const request = () => {
  return axios.default.create({
    baseURL: config.apiURL,
    headers: {
      Authorization: localStorage.getItem(AUTH_TOKEN_KEY),
    },
  });
};
