import { Brand } from "./brand";
import { Category } from "./category";

export type Product = {
  _id?: object | Key | null | undefined;
  name: string;
  slug: string;
  brand_id?: Brand;
  category_id?: Category;
  color?: object;
  description?: string;
  price: number;
  quantity_import: number;
  quantity_sold: number;
  promotion: number;
  avatar: string;
  gallery?: string[];
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
