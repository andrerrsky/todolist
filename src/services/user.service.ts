import { request } from "./baseConfig";

export const login = async (email: string, password: string) => {
  try {
    let res = await request().post("/users/login-admin", {
      email,
      password,
    });
    return res.data;
  } catch (e: any) {
    return e.response.data;
  }
};
