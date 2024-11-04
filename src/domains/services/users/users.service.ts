import { axiosInstance } from "@/configs";
import { Data, RootResponse } from "@/domains/models/root/root.response";
import { UserParamsRequest, UsersResponse } from "@/domains/models/users";
import axios from "axios";

export const UserApi = {
  getUsers: async (
    options?: UserParamsRequest
  ): Promise<RootResponse<Data<UsersResponse[]>> | undefined> => {
    try {
      const response = await axiosInstance.get("/api/users", {
        params: options,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  getUsersRole: async (): Promise<RootResponse<string> | undefined> => {
    try {
      const response = await axiosInstance.get("/api/users/role");

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },
};
