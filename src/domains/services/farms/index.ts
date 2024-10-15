import { axiosInstance } from "@/configs";
import { FarmsBody } from "@/domains/models/farms/farms-body.request";
import { FarmsParams } from "@/domains/models/farms/farms-params.request";

export const farmApi = {
  getFarmList: async (options?: FarmsParams) => {
    const response = await axiosInstance.get("/api/farms", { params: options });
    return response.data;
  },

  getFarmDetail: async (id: string) => {
    const response = await axiosInstance.get(`/api/farms/${id}`);
    return response.data;
  },

  createFarm: async (data: FarmsBody) => {
    const response = await axiosInstance.post("/api/farms", data);
    return response.data;
  },

  updateFarm: async (id: string, data: FarmsBody) => {
    const response = await axiosInstance.put(`/api/farms/${id}`, data);
    return response.data;
  },

  deleteFarm: async (id: string) => {
    const response = await axiosInstance.delete(`/api/farms/${id}`);
    return response.data;
  },
};
