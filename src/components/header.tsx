import { FacebookRounded, Instagram } from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import { useState } from "react";
import { FaBars, FaCartPlus, FaUserCircle } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import mobile_logo from "../assets/images/mobile.png";

function Header() {
  // const { data, isFetching } = useGetAllCategoriesQuery();
  // Handle Open Menu
  const [onOpenMenu, setOnOpenMenu] = useState<boolean>(false);
  const handleOpenMenu = () => {
    setOnOpenMenu(!onOpenMenu);
  };
  // const categories = data?.metadata;
  // if (isFetching) return null;
  return (
    <Box
      component="div"
      sx={{
        position: "sticky",
        top: "0px",
        zIndex: "1000",
        left: "0px",
        right: "0px",
      }}
    >
      <Box component="div" bgcolor="black">
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#fff",
            paddingY: "10px",
          }}
        >
          <Box
            sx={{
              fontSize: 13,
            }}
            component="div"
          >
            <Box component="span">Mon-Thu: </Box>
            <Box
              component="span"
              sx={{
                fontWeight: 700,
              }}
            >
              9 AM - 5:30 PM
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              fontSize: 13,
            }}
            component="div"
          >
            <Box
              sx={{
                color: "#ACACAC",
                fontWeight: 600,
              }}
              component="span"
            >
              Visit our showroom in 1234 Street Address City Address, 1234
            </Box>
            <Box
              component="a"
              href="/"
              sx={{
                marginLeft: "10px",
                fontWeight: 700,
              }}
            >
              Contact Us
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              fontSize: 13,
              alignItems: "center",
              color: "white",
              gap: 1,
            }}
            component="div"
          >
            <Box
              sx={{
                color: "#fff",
                fontWeight: 700,
              }}
              component="span"
            >
              Call Us: <span className="ml-2">(00) 1234 5678</span>
            </Box>
            <Box
              component="div"
              sx={{
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box component="a" href="/">
                <FacebookRounded />
                <Instagram />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: { xs: "blue", md: "#fff" },
          display: "flex",
          padding: '10px 20px'
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box component="div" display="flex" alignItems="center" gap="16px">
            <FaBars
              className="hover:opacity-90 text-white lg:hidden"
              size={24}
              onClick={handleOpenMenu}
            />
            <a className="hidden lg:block">
              <img src={logo} />
            </a>
            <a className="block lg:hidden">
              <img src={mobile_logo} />
            </a>
          </Box>
          <Box component="div" display="flex" alignItems="center">
            {/* {categories && (
              <MultiLevelMenu
                categories={categories}
                onClick={handleOpenMenu}
                onOpenMenu={onOpenMenu}
              />
            )} */}
            {/* <Box
              component="p"
              sx={{
                paddingTop: { xs: "0px", md: "5px" },
                paddingBottom: { xs: "0px", md: "5px" },
                paddingLeft: { xs: "10px", md: "20px" },
                paddingRight: { xs: "10px", md: "20px" },
                color: { xs: "white", md: "#0156FF" },
                bgcolor: { md: "white" },
                fontWeight: 600,
                fontFamily: "Poppins",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                border: { xs: "2px solid white", md: "2px solid #0156FF" },
                borderRadius: "100px",
                cursor: "pointer",
                ":hover": { color: "white", bgcolor: "#0156FF" },
                
              }}
            >
              Our Dear
            </Box> */}
          </Box>
          <div className="flex items-center gap-x-3 ml-auto">
            <a className="relative">
              <FaCartPlus size={24} className="text-white lg:text-black" />
              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full bg-white w-[20px] h-[20px] flex justify-center items-center">
                1
              </span>
            </a>
            <div>
              <FaUserCircle size={24} className="text-white lg:text-black" />
              {/* List Feature User */}
            </div>
          </div>
        </Container>
      </Box>
    </Box>
  );
}

export default Header;
