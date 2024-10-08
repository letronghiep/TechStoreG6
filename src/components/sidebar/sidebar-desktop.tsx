import { ArrowForwardIos } from "@mui/icons-material";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Menu, { menuClasses } from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Sheet from "@mui/joy/Sheet";
import { cloneElement, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "~/models/category";

// Define a type for the function options
const modifiers = [
  {
    name: "offset",
    options: {
      offset: ({ placement }) => {
        if (placement.includes("end")) {
          return [8, 20];
        }
        return [-8, 20];
      },
    },
  },
];

function NavMenuButton({
  children,
  menu,
  open,
  onOpen,
  onLeaveMenu,
  label,
  ...props
}) {
  const isOnButton = useRef(false);
  const internalOpen = useRef(open);

  const handleButtonKeyDown = (event) => {
    internalOpen.current = open;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      onOpen(event);
    }
  };

  return (
    <Dropdown
      open={open}
      onOpenChange={(_, isOpen) => {
        if (isOpen) {
          onOpen?.();
        }
      }}
    >
      <MenuButton
        {...props}
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "plain", color: "neutral" } }}
        onMouseDown={() => {
          internalOpen.current = open;
        }}
        onClick={() => {
          if (!internalOpen.current) {
            onOpen();
          }
        }}
        onMouseEnter={() => {
          onOpen();
          isOnButton.current = true;
        }}
        onMouseLeave={() => {
          isOnButton.current = false;
        }}
        onKeyDown={handleButtonKeyDown}
        sx={{
          bgcolor: open ? "neutral.plainHoverBg" : undefined,
          "&:focus-visible": {
            bgcolor: "neutral.plainHoverBg",
          },
        }}
      >
        {children}
      </MenuButton>
      {cloneElement(menu, {
        onMouseLeave: () => {
          onLeaveMenu(() => isOnButton.current);
        },
        modifiers,
        slotProps: {
          listbox: {
            id: `nav-example-menu-${label}`,
            "aria-label": label,
          },
        },
        placement: "right-start",

        sx: {
          width: "calc(292px)",
          [`& .${menuClasses.listbox}`]: {
            "--List-padding": "var(--ListDivider-gap)",
          },
        },
      })}
    </Dropdown>
  );
}

function SidebarDesktop({ categories }) {
  const [parentCategories, setParentCategories] = useState([]);
  useEffect(() => {
    if (categories) {
      const filteredCategories = categories.filter(
        (item) => item.parentCategory === null
      );
      setParentCategories(filteredCategories);
    }
  }, [categories]);
  const [menuIndex, setMenuIndex] = useState(null);
  const itemProps = {
    onClick: () => setMenuIndex(null),
  };
  const createHandleLeaveMenu = (index) => (getIsOnButton) => {
    setTimeout(() => {
      const isOnButton = getIsOnButton();
      if (!isOnButton) {
        setMenuIndex((latestIndex) => {
          if (index === latestIndex) {
            return null;
          }
          return latestIndex;
        });
      }
    }, 200);
  };
  return (
    <Sheet
      sx={{
        borderRadius: "md",
        backgroundColor: "white",
        height: "100%",
        fontSize: "12px",
      }}
    >
      <List
        sx={{
          fontSize: "12px",
          borderRadius: "md",
          padding: "0px",
          backgroundColor: "white",
          maxHeight: "100%",
        }}
        size="sm"
      >
        {categories &&
          parentCategories.map((item, index) => (
            <ListItem key={item._id}>
              <Link
                className="w-full hover:bg-inherit relative"
                to={`${item.slug}`}
              >
                <NavMenuButton
                  label={item.category_name}
                  open={menuIndex === index}
                  onOpen={() => setMenuIndex(index)}
                  onLeaveMenu={createHandleLeaveMenu(index)}
                  menu={
                    <Menu
                      sx={{
                        fontSize: "13px",
                      }}
                      className=""
                      onClose={() => setMenuIndex(null)}
                    >
                      {categories
                        .filter((sub) => sub.parentCategory === item._id)
                        .map((o) => (
                          <MenuItem
                            key={o._id}
                            {...itemProps}
                            className="col-span-2"
                          >
                            <Link to={o.slug}>{o.category_name}</Link>
                          </MenuItem>
                        ))}
                    </Menu>
                  }
                  className="flex items-center justify-between w-full"
                >
                  {item.category_name}
                  <ArrowForwardIos
                    sx={{
                      fontSize: "12px",
                      marginLeft: "auto",
                    }}
                  />
                </NavMenuButton>
              </Link>
            </ListItem>
          ))}
      </List>
    </Sheet>
  );
}

export default SidebarDesktop;
