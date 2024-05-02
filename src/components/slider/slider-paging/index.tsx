import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TSliderSimpleProps } from "../TSliderSimpleProps";
type Props = {
  images: string[];
};
function CustomPaging({ images }: Props) {
  const settings: TSliderSimpleProps = {
    customPaging: function (i: number) {
      return (
        <a>
          <img className="w-full" src={`${images[i]}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="w-full">
            <img src={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomPaging;
