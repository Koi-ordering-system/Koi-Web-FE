export interface TravelsResponse {
  id: string;
  farmId: string;
  farmName: string;
  farmImages: string[];
  koiDetails: Kois[];
  days: number;
  price: number;
}

interface Kois {
  id: string;
  name: string;
}
