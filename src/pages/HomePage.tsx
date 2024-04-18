import Banner from "~/components/banner/banner";
import Header from "~/components/header";
import NewProducts from "~/components/product/new-products";
// import ProductLists from "~/components/product/product-list";

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <NewProducts />

    </>
  );
}

export default HomePage;
