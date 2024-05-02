import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Product } from "~/models/product";
import { TSliderSimpleProps } from "./TSliderSimpleProps";
type Props = {
  images: Product[] | undefined;
};
export default function SimpleSlider({ images }: Props) {
  const settings: TSliderSimpleProps = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      {images?.map((item: Product) => (
        <img
          key={item._id}
          className="max-h-[180px] lg:max-h-[400px] object-cover"
          src={item.avatar}
          alt="banner"
        />
      ))}
    </Slider>
  );
}
