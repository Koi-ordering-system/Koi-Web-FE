import { RootRequest } from "@/domains/models/root/root.request";

export interface SpeciesParams extends RootRequest {
  keyword?: string;
}
