import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Product } from "~/models/product";
import NextArrows from "../arrows/next-arrows";
import PreviousArrows from "../arrows/prev-arrow";
import ProductItem from "../product/products-slide/product-item";
import { TSliderSimpleProps } from "./TSliderSimpleProps";
type Props = {
  products: Product[] | undefined;
  slidesToShow: number;
  slidesToScroll: number;
};
export default function ProductSlider({
  products,
  slidesToShow = 5,
  slidesToScroll = 5,
}: Props) {
  const settings: TSliderSimpleProps = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: true,
    className: "relative",
    nextArrow: <NextArrows />,
    prevArrow: <PreviousArrows />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {products?.map((item: Product) => (
        <ProductItem
          slug={item.slug}
          avatar={item.avatar}
          price={item.price}
          quantity_import={item.quantity_import}
          quantity_sold={item.quantity_sold}
          rateAvg={item.rateAvg}
          promotion={item.promotion}
          name={item.name}
        />
      ))}
    </Slider>
  );
}
