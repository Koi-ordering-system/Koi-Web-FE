export interface KoisResponse {
  id: string;
  name: string;
  description: string;
  minSize: number;
  maxSize: number;
  isMale: boolean;
  price: number;
  speciesId: string;
  speciesName: string;
  colors: string[];
  farms: Farm[];
  imageUrls: string[];
}

export interface Farm {
  farmKoiId: string;
  farmId: string;
  name: string;
}
