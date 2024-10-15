import { axiosInstance } from "@/configs";
import { KoisBody } from "@/domains/models/kois/kois-body.request";
import { KoisParams } from "@/domains/models/kois/kois-params.request";

export const KoisApi = {
  getKoisList: async (options?: KoisParams) => {
    const response = await axiosInstance.get("/api/kois", { params: options });
    return response.data;
  },

  getKoiDetail: async (id: string) => {
    const response = await axiosInstance.get(`/api/kois/${id}`);
    return response.data;
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
