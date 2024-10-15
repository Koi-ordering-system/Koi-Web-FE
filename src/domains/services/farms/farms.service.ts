import { axiosInstance } from "@/configs";
import { FarmsBody, FarmsParams, FarmsResponse } from "@/domains/models/farms";
import { Data, RootResponse } from "@/domains/models/root/root.response";

import axios from "axios";

export const farmApi = {
  getFarmList: async (
    options?: FarmsParams
  ): Promise<RootResponse<Data<FarmsResponse[]>> | undefined> => {
    try {
      const response = await axiosInstance.get("/api/farms", {
        params: options,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
    return undefined;
  },

  getFarmDetail: async (id: string) => {
    await axiosInstance
      .get(`/api/farms/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          return error.response?.data;
        }
      });
  },

  createFarm: async (data: FarmsBody) => {
    await axiosInstance
      .post("/api/farms", data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          return error.response?.data;
        }
      });
  },

  updateFarm: async (id: string, data: FarmsBody) => {
    await axiosInstance
      .put(`/api/farms/${id}`, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          return error.response?.data;
        }
      });
  },

  deleteFarm: async (id: string) => {
    await axiosInstance
      .delete(`/api/farms/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          return error.response?.data;
        }
      });
  },
};
