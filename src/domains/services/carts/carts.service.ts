import { axiosInstance } from "@/configs";
import { CartsBodyRequest, CartsResponse } from "@/domains/models/carts";
import { Data, RootResponse } from "@/domains/models/root/root.response";
import axios from "axios";

export const apiCart = {
  getCartList: async (): Promise<
    RootResponse<Data<CartsResponse[]>> | undefined
  > => {
    try {
      const response = await axiosInstance.get("/api/carts");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },
  postCart: async (data: CartsBodyRequest): Promise<boolean | undefined> => {
    try {
      await axiosInstance.post("/api/carts", data);
      return true;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return false;
      }
    }
  },
}; 
