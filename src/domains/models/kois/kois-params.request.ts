import { RootRequest } from "@/domains/models/root/root.request";

export interface KoisParams extends RootRequest {
  sortBy?: string;
  sortOrder?: string;
  search?: string;
}
