import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "~/models/product";
import { useGetAllProductsInHomeQuery } from "~/services/products";
import SimpleSlider from "../slider/slider";

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
    <>
      <SimpleSlider images={images} />
      <Grid
        container
        spacing={1}
        sx={{
          marginTop: "10px",
        }}
      >
        {images
          ?.filter((item) => item.promotion)
          .sort((a, b) => a.promotion - b.promotion)
          .filter((_, idx) => idx < 3)
          .map((item) => (
            <Grid
              className="h-[230px]"
              sx={{
                borderRadius: "14px",
                overflow: "hidden",
                ":hover": {
                  scale: "105%",
                  transform: "opacity",
                  opacity: "90%",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
              item
              xs={4}
            >
              <Link to={item.slug} className="h-full">
                <img className="h-full object-cover w-full" src={item.avatar} />
              </Link>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default Banner;
