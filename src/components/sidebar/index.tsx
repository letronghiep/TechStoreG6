import { Container, Grid } from "@mui/material";
import { Category } from "~/models/category";
import Banner from "../banner/banner";
import SidebarDesktop from "./sidebar-desktop";
type Props = {
  categories: Category[] | [] | undefined;
};
export default function Sidebar({ categories }: Props) {
  return (
    <Container
      sx={{
        marginTop: "20px",
      }}
    >
      <Grid
        container
        columnGap={1.5}
        flexWrap="nowrap"
        sx={{
          width: "100%",
        }}
      >
        <Grid
          item
          xs={2.5}
          className="shadow shadow-neutral-800/30 rounded-md bg-white"
        >
          <SidebarDesktop categories={categories} />
        </Grid>
        <Grid item xs={9.5}>
          <Banner />
        </Grid>
      </Grid>
    </Container>
  );
}
