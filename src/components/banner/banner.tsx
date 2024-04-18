import React, { useEffect, useState } from "react";
import { useGetAllProductsInHomeQuery } from "~/services/products";
import SimpleSlider from "../slider/slider";
import { Product } from "~/models/product";
import { Container } from "@mui/material";

function Banner() {
  const { data: products } = useGetAllProductsInHomeQuery();
  const [images, setImages] = useState<Product[]>();
  useEffect(() => {
    async function getImages() {
      if (products) {
        setImages(products.metadata.data);
      }
    }
    getImages();
  }, [products]);
  return (
    <Container
      sx={{
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <SimpleSlider images={images} />
    </Container>
  );
}

export default Banner;
