export type TSliderSimpleProps = {
  alt?: string;
  arrows?: boolean;
  className?: string;
  dots?: boolean;
  fade?: boolean;
  height?: string;
  images?: string[];
  infinite?: boolean;
  nextArrow?: JSX.Element | undefined;
  prevArrow?: JSX.Element | undefined;
  slidersToScroll?: number;
  slidesToShow?: number;
  swipeToSlide?: boolean;
  speed?: number;
  width?: string;
  slidesToScroll?: number;
  autoplay?: boolean;
  initialSlide?: number;
  responsive?: ResponseItem[];
};
type ResponseItem = {
  breakpoint: number;
  settings: object;
};
