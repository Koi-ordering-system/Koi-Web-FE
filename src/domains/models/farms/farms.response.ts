export interface FarmsResponse {
  id: string;
  name: string;
  owner: string;
  address: string;
  description: string;
  rating: number;
  farmImages: farmImages[];
  kois: Kois[];
}

interface farmImages {
  id: string;
  url: string;
}

interface Kois {
  id: string;
  name: string;
  quantity: number;
  imageUrls: string[];
  colors: Color[];
}

interface Color {
  id: string;
  name: string;
}
