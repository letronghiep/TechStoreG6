import { ArrowForwardIos } from "@mui/icons-material";
import { Box } from "@mui/material";
import { MouseEventHandler } from "react";
type Props = {
  onClick?: MouseEventHandler<HTMLDivElement>;
};
function NextArrows({ onClick }: Props) {
  return (
    <Box
      className="w-14 h-14 rounded-l-full text-white bg-neutral-800/20 hover:bg-opacity-100 cursor-pointer duration-300 flex justify-center items-center absolute right-[10px] top-1/2 -translate-y-1/2 hover:scale-110"
      component="div"
      onClick={onClick}
    >
      <Box component="span" className="text-xl">
        <ArrowForwardIos />
      </Box>
    </Box>
  );
}

export default NextArrows;
