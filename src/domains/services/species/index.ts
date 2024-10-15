import { axiosInstance } from "@/configs";
import { SpeciesBody } from "@/domains/models/species/species-body.request";
import { SpeciesParams } from "@/domains/models/species/species-params.quest";

export const speciesApi = {
  getSpeciesList: async (options: SpeciesParams) => {
    const response = await axiosInstance.get("/api/species", {
      params: options,
    });
    return response.data;
  },

  getSpeciesDetail: async (id: string) => {
    const response = await axiosInstance.get(`/api/species/${id}`);
    return response.data;
  },

  createSpecies: async (data: SpeciesBody) => {
    const response = await axiosInstance.post("/api/species", data);
    return response.data;
  },

  updateSpecies: async (id: string, data: SpeciesBody) => {
    const response = await axiosInstance.put(`/api/species/${id}`, data);
    return response.data;
  },

  deleteSpecies: async (id: string) => {
    const response = await axiosInstance.delete(`/api/species/${id}`);
    return response.data;
  },
};
