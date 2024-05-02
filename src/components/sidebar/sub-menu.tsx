import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Category } from "~/models/category";
type Props = {
  data: Category[];
  title: string;
};

const SubMenu = ({ data, title }: Props) => {
  return (
    <Box component="div" className="absolute top-0 left-full translate-x-6">
      <h2>{title}</h2>
      {data.map((item) => (
        <Link to={item.slug}>{item.category_name}</Link>
      ))}
    </Box>
  );
};

export default SubMenu;
