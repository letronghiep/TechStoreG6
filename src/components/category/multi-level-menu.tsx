import React, { useMemo } from "react";
import { FaTimes } from "react-icons/fa";
import CategoryItem from "./category-item";
import { Category } from "../../models/category";
type Props = {
  onClick: () => void;
  onOpenMenu?: boolean;
  categories: Category[];
};
function MultiLevelMenu({ categories, onClick, onOpenMenu }: Props) {
  const parentCategories: Category[] = useMemo(() => {
    return categories.filter((item) => item.parentCategory === null);
  }, [categories]);
  const renderSubmenu = (parentCategoryId: object) => {
    return categories?.filter(
      (item) => item.parentCategory === parentCategoryId
    );
  };
  return (
    <div>
      <div>
        <div
          className={`flex-col gap-x-2 items-center lg:gap-x-3 top-0  left-0 right-0 bottom-0  h-full p-3 lg:px-3 lg:py-0  lg:flex-row lg:justify-between lg:left-0  lg:mt-0 lg:flex lg:items-center lg:pb-0 absolute lg:static bg-white lg:z-[auto] z-[1000] w-full lg:pl-0 transition-all duration-500 ease-in ${
            onOpenMenu ? "left-0" : "left-[-100%]"
          }`}
        >
          <div
            className="absolute top-2 right-6 cursor-pointer hover:opacity-90 lg:hidden"
            onClick={onClick}
          >
            <FaTimes size={24} />
          </div>
          <ul
            className={`mt-6 lg:mt-0 flex flex-col gap-x-3 lg:flex-row lg:items-center justify-between`}
          >
            {parentCategories.map((item) => (
              <li key={item._id}>
                <CategoryItem
                  parentCategory={item.parentCategory}
                  name={item.category_name}
                  subCategories={renderSubmenu(item._id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MultiLevelMenu;
