export interface RootResponse<T> {
  value: Value<T> | T;
  status: number;
  isSuccess: boolean;
  successMessage: string;
  correlationId: string;
  location: string;
  errors: Errors[];
  validationErrors: ValidationErrors[];
}

export interface Value<T> {
  data: T;
  pageIndex: number;
  pageSize: number;
  totalPages: number;
}

export interface Errors {}

export interface ValidationErrors {}
