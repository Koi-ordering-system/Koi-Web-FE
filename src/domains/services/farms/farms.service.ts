import { axiosInstance } from "@/configs";
import {
  FarmAddKoiBody,
  FarmEditResponse,
  FarmsBody,
  FarmsParams,
  FarmsResponse,
} from "@/domains/models/farms";
import { FarmDetailResponse } from "@/domains/models/farms/farm-detail.response";
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

  getFarmDetail: async (
    id: string
  ): Promise<RootResponse<FarmDetailResponse> | undefined> => {
    try {
      const response = await axiosInstance.get(`/api/farms/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }

    return undefined;
  },

  createFarm: async (
    data: FarmsBody
  ): Promise<RootResponse<FarmEditResponse> | undefined> => {
    try {
      const response = await axiosInstance.post("/api/farms", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  updateFarm: async (
    id: string,
    data: FarmsBody
  ): Promise<RootResponse<FarmEditResponse> | undefined> => {
    try {
      const response = await axiosInstance.put(`/api/farms/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  deleteFarm: async (id: string): Promise<boolean | undefined> => {
    try {
      const response = await axiosInstance.delete(`/api/farms/${id}`);
      if (response.status === 204 || response.status === 200) {
        return true;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  pacthAddKoiFarm: async (
    data: FarmAddKoiBody[],
    id: string
  ): Promise<boolean | undefined> => {
    try {
      const response = await axiosInstance.patch(`/api/farms/${id}/kois`, data);

      if (response.status === 204 || response.status === 200) {
        return true;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
    return undefined;
  },
};
