export interface KoisResponse {
  id: string;
  name: string;
  description: string;
  minSize: number;
  maxSize: number;
  farms: [
    {
      id: string;
      name: string;
    }
  ]
  isMale: boolean;
  price: number;
  imageUrls: string;
}
