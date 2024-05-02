import { User } from "./user";

export type News = {
  _id: object | Key | null | undefined;

  user_id: User;
  title: string;
  description: string;
  content: string;
  avatar: string;
  status?: string;
  slug?: string;
};
