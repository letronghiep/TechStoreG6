import { Brand } from "./brand";

export type Product = {
  _id?: object | Key | null | undefined;
  name?: string;
  slug?: string;
  brand_id?: Brand;
  category?: object;
  color?: object;
  description?: string;
  price: number;
  quantity_import: number;
  quantity_sold?: number;
  promotion: number;
  image_url: string;
  isPublished?: boolean;
  specs?: SpecProduct[];
  sku?: string;
  rateAvg?: number;
  createdAt?: Date;
};
export type SpecProduct = {
  k: string;
  v?: string | number;
  u?: string;
};
