export interface RootResponse<T> {
  succeeded: boolean;
  message: null;
  data: T;
}

export interface Data<T> {
  pageIndex: number;
  pageSize: number;
  totalPages: number;
  value: T;
}
