export interface FarmsBody {
  name: string;
  owner: string;
  address: string;
  description: string;
  farmImages: Blob[];
}

export interface FarmAddKoiBody {
  id: string;
  quantity: number;
}
