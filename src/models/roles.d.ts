export type Role = {
    _id: object | Key | null | undefined;

  name?: string | "";
  slug?: string | "";
  status?: string[];
  description?: string | "";
  grants?: Grant[];
};
type Grant = {
  resource?: Resource;
  actions?: string[];
  attributes?: string;
};
type Resource = {
  name?: string;
  slug?: string;
  description?: string;
};
