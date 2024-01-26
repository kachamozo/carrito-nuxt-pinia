import { getData, postData } from "../service/config.service";

export const userService = {
  getUsers: async () => getData("users"),
  postUsers: async (body: any) => postData("users", body),
  putUsers: async (body: any) => postData("users", body),
  deleteUsers: async (body: any) => postData("users", body),
};
