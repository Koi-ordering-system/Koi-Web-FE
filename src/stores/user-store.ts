import { create } from "zustand";
import { UserResponse } from "@/models/response/user.response";

interface UserStore {
  users: UserResponse[];
  setUsers: (users: UserResponse[]) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  setUsers: (users: UserResponse[]) => set({ users }),
}));
