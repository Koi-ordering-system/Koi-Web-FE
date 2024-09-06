import { axiosInstance } from "@/configs";
import { handleApiCall } from "@/lib";
import { UserRequest } from "@/models/request/user.request";
import { UserResponse } from "@/models/response/user.response";

export const userApi = {
  // example of a function that calls an API
  listUsers: async (
    options?: Record<string, unknown>
  ): Promise<UserResponse[] | null> =>
    handleApiCall(async () => {
      const response = await axiosInstance.get<UserResponse[]>(
        "/api/user",
        options
      );
      return response.data;
    }),

  getUser: async (id: number): Promise<UserResponse | null> =>
    handleApiCall(async () => {
      const response = await axiosInstance.get<UserResponse>(`/api/user/${id}`);
      return response.data;
    }),

  createUser: async (user: UserRequest): Promise<UserRequest | null> =>
    handleApiCall(async () => {
      const response = await axiosInstance.post<UserRequest>("/api/user", user);
      return response.data;
    }),

  updateUser: async (
    user: UserRequest,
    id: string
  ): Promise<UserRequest | null> =>
    handleApiCall(async () => {
      const response = await axiosInstance.put<UserRequest>(
        `/api/user/${id}`,
        user
      );
      return response.data;
    }),

  deleteUser: async (id: number): Promise<UserResponse | null> =>
    handleApiCall(async () => {
      const response = await axiosInstance.delete<UserResponse>(
        `/api/user/${id}`
      );
      return response.data;
    }),
};
