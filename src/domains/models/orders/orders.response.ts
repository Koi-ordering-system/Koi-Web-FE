export interface OrdersUnApprovedResponse {
  id: string;
  farmId: string;
  farmName: string;
  days: number;
  price: number;
}

export interface Trip {
  id: string;
  days: number;
  price: number;
}

export interface OrdersPersonalResponse {
  id: string;
  userId: string;
  farmId: string;
  farmName: string;
  price: number;
  isPaid: boolean;
  status: string;
  kois: any[];
  trip: Trip;
}

export interface OrdersServiceResponse {
  id: string;
  orderTripId: string;
  userId: string;
  farmId: string;
  farmName: string;
  price: number;
  isPaid: boolean;
  status: string;
  startDate: Date;
  endDate: Date;
  tripStatusEnum: number;
  kois: any[];
  trip: Trip;
}

export interface OrdersDeliveryResponse {}
