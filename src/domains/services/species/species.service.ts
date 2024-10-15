import { axiosInstance } from "@/configs";
import { Data, RootResponse } from "@/domains/models/root/root.response";
import {
  SpeciesBody,
  SpeciesParams,
  SpeciesResponse,
} from "@/domains/models/species";
import axios from "axios";

export const speciesApi = {
  getSpeciesList: async (
    options?: SpeciesParams
  ): Promise<RootResponse<Data<SpeciesResponse[]>> | undefined> => {
    try {
      const response = await axiosInstance.get("/api/species", {
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

  getSpeciesDetail: async (id: string) => {
    await axiosInstance
      .get(`/api/species/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },

  createSpecies: async (data: SpeciesBody) => {
    await axiosInstance
      .post("/api/species", data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },

  updateSpecies: async (id: string, data: SpeciesBody) => {
    await axiosInstance
      .put(`/api/species/${id}`, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },

  deleteSpecies: async (id: string) => {
    await axiosInstance
      .delete(`/api/species/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
