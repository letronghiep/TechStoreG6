export type ArrayData = {
  message: string;
  status: number;
  metadata: [];
  options?: object;
};

export type ProductsData = {
  message: string;
  status: number;
  metadata: {
    currentPage: number;
    limit: number;
    totalPages: number;
    totalRow: number;
    data: [];
  };
  options: object | undefined;
};
