export interface SpeciesKoisBody {
  name: string;
  description: string;
  minSize: number;
  maxSize: number;
  price: number;
  koiImages?: Blob[];
  colors: string;
}
