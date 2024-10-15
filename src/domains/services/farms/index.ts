import { axiosInstance } from "@/configs";
import { FarmsBody, FarmsParams } from "@/domains/models/farms";

import axios from "axios";

export const farmApi = {
  getFarmList: async (options?: FarmsParams) => {
    await axiosInstance
      .get("/api/farms", { params: options })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          return error.response?.data;
        }
      });
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
