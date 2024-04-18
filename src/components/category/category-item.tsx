import { MdArrowDropDown } from "react-icons/md";
import { Category } from "../../models/category";
import SubItem from "./sub-item";
import { MouseEventHandler, useRef, useState } from "react";
import "./category.scss";
type Props = {
  // key: object,
  name?: string;
  parentCategory?: object;
  subCategories?: Category[];
  isOpenSubMenu?: boolean;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
};
function CategoryItem({ name, parentCategory, subCategories }: Props) {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);
  const ref: React.MutableRefObject<HTMLUListElement | null> = useRef(null);
  const toggleMobileMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
    // Thêm/xóa lớp CSS vào thẻ body
    const subMenu = ref.current;
    if (subMenu && subMenu !== null) {
      subMenu.classList.toggle("mobile-menu-open");
      subMenu.classList.toggle("sub-menu");
    }
  };
  return (
    <div className="relative menu-item">
      <div
        className="w-full font-bold cursor-pointer hover:text-gray-600 px-3 py-4 hover:bg-gray-100 flex items-center justify-between text-[14px]"
        onClick={toggleMobileMenu}
      >
        {name}
        {parentCategory === null &&
          subCategories &&
          subCategories.length > 0 && <MdArrowDropDown size={18} />}
      </div>
      <ul ref={ref} className={`absolute sub-menu`}>
        {subCategories?.map((item) => (
          <li className="w-full h-full hover:bg-gray-50" key={item._id}>
            <SubItem category_name={item.category_name} _id={item._id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryItem;
// Suwe dụng onMouseEnter và onMouseLeave handle show menu
