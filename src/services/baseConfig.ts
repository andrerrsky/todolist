import * as axios from "axios";
import { config } from "../config";

export const request = () => {
  return axios.default.create({
    baseURL: config.apiURL,
    headers: {
      Authorization: "token",
    },
  });
};
