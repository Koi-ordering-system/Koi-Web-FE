import { RootRequest } from "@/domains/models/root/root.request";

export interface FarmsParams extends RootRequest {
  ascByRating?: boolean;
  search?: string;
}
