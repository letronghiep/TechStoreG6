import {
  Box,
  CardActionArea,
  Rating,
  Typography
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { BiCheckCircle } from "react-icons/bi";
import { FaRegTimesCircle } from "react-icons/fa";
import { Product } from "~/models/product";

export default function ProductItem({
  name,
  image_url,
  quantity_import,
  price,
  promotion,
  slug,
}: Product) {
  return (
    <Card
      sx={{
        height: { xs: "256px", md: "319px" },
        margin: "10px",
        // maxHeight: "100%",
      }}
      className="cursor-pointer"
    >
      <CardActionArea
        href={`/products/${slug}`}
        sx={{
          height: "100%",
        }}
      >
        <Box component="div">
          {quantity_import > 0 ? (
            <span
              style={{
                color: "#78A962",
              }}
              className="flex items-center gap-x-2  text-sm ml-4"
            >
              <BiCheckCircle
                style={{
                  color: "#78A962",
                }}
              />
              In stock
            </span>
          ) : (
            <span className="text-red-600 font-semibold flex items-center gap-x-2 text-sm ml-4">
              <FaRegTimesCircle /> Out of stock
            </span>
          )}
        </Box>
        <CardMedia
          component="img"
          image={image_url}
          alt={name}
          sx={{
            width: { xs: "100px", lg: "150px" },
            height: { xs: "100px", lg: "150px" },
            margin: "0 auto",
          }}
          className="hover:scale-x-110 duration-300 ease-in transition-all mx-auto"
        />
        <CardContent>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              columnGap: { xs: "4px", md: "10px" },
              marginBottom: "10px",
            }}
          >
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
              size="small"
            />
            <Typography
              sx={{
                fontSize: "12px",
              }}
              variant="subtitle2"
            >
              Review(3)
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "Poppins",
            }}
            className="hover:opacity-90"
          >
            {name}
          </Typography>
          <Box component="div">
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "Poppins",
              }}
              variant="inherit"
            >
              {promotion > 0 ? <del>{price}</del> : <span>{price}</span>}
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                fontFamily: "Poppins",
              }}
              variant="inherit"
            >
              {promotion > 0 && <span>{price * (1 - promotion / 100)}</span>}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
