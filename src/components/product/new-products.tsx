import { Box, Container, Typography } from "@mui/material";
import { useGetAllProductsInHomeQuery } from "~/services/products";
import Loading from "../loading/Loading";
import ProductSlider from "../slider/product-slider";
import { Link } from "react-router-dom";
function NewProducts() {
  const { data, isFetching } = useGetAllProductsInHomeQuery();

  if (isFetching) return <Loading />;

  return (
    <Container>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 600,
            fontFamily: "Poppins",
          }}
          variant="h2"
          children="New products"
        />
        <Link
          to="/products"
          style={{
            textDecoration: "underline",
            fontSize: "13px",
            color: "#0156FF",
          }}
        >
          See all products
        </Link>
      </Box>
      <ProductSlider products={data?.metadata?.data} />
    </Container>
  );
}

export default NewProducts;
