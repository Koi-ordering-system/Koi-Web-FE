export interface FarmsResponse {
  id: string;
  name: string;
  owner: string;
  address: string;
  description: string;
  rating: number;
  farmImages: FarmImages[];
}

interface FarmImages {
  id: string;
  url: string;
}
