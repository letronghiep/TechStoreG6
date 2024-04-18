import React from "react";
import { Category } from "~/models/category";

function SubItem({ category_name, _id }: Category) {
  return (
    <a
      className="w-full h-full block text-black hover:text-black bg-white hover:bg-gray-100 p-3 duration-200 ease-linear transition-colors"
      style={{
        fontFamily: "Poppins",
        fontSize: "14px"
      }}
      href={`/${_id}`}
    >
      {category_name}
    </a>
  );
}

export default SubItem;
