export interface TravelDetailResponse {
    id: string;
    farmId: string;
    farmName: string;
    farmImages: string[];
    farmOwner: string;
    farmAddress: string;
    farmDescription: string;
    farmRating: number;
    koiDetails: Kois[];
    days: number;
    price: number;
  }
  
  interface Kois {
    id: string;
    name: string;
    images: string[];
    description: string;
    minSize: number;
    maxSize: number;
    price: number;
    quantity: number;
  }
  