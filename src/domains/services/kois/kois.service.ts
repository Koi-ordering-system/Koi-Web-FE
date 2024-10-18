import { axiosInstance } from "@/configs";
import { KoisResponse } from "@/domains/models/kois";
import { KoisBody } from "@/domains/models/kois/kois-body.request";
import { KoisParams } from "@/domains/models/kois/kois-params.request";
import { Data, RootResponse } from "@/domains/models/root/root.response";
import axios from "axios";

export const KoisApi = {
  getKoisList: async (
    options?: KoisParams
  ): Promise<RootResponse<Data<KoisResponse[]>> | undefined> => {
    try {
      const response = await axiosInstance.post("/api/kois/get", {
        params: options,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  getKoiDetail: async (
    id: string
  ): Promise<RootResponse<KoisResponse> | undefined> => {
    try {
      const response = await axiosInstance.get(`/api/kois/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  createKoi: async (data: KoisBody) => {
    const response = await axiosInstance.post("/api/kois", data);
    return response.data;
  },

  updateKoi: async (id: string, data: KoisBody) => {
    const response = await axiosInstance.put(`/api/kois/${id}`, data);
    return response.data;
  },

  deleteKoi: async (id: string) => {
    const response = await axiosInstance.delete(`/api/kois/${id}`);
    return response.data;
  },
};
