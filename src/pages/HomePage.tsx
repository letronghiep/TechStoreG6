import { useEffect, useMemo, useState } from "react";
import Layout from "~/components/layout/layout";
import Loading from "~/components/loading/pre-loading";
import FlashSales from "~/components/product/flash-sale/flash-sales";
import NewProducts from "~/components/product/products-slide/new-products";
import Sidebar from "~/components/sidebar";
import { Product } from "~/models/product";
import { useGetAllCategoriesQuery } from "~/services/categories";
import { useGetAllProductsInHomeQuery } from "~/services/products";
// import ProductLists from "~/components/product/product-list";

function HomePage() {
  const { data: listCategories, isFetching: categoriesLoading } =
    useGetAllCategoriesQuery();

  const { data: listProducts, isFetching: productsLoading } =
    useGetAllProductsInHomeQuery();
  const [products, setProducts] = useState<Product[]>([]);
  const categories = useMemo(() => listCategories?.metadata, [listCategories]);
  useEffect(() => {
    if (listProducts && listProducts?.metadata.data.length > 0) {
      setProducts(listProducts?.metadata.data);
    }
  }, [listProducts]);
  const pcs = useMemo(() => {
    return products.filter((item) => item.category_id?.category_name === "PC");
  }, [products]);
  const laptops = useMemo(() => {
    return products.filter(
      (item) => item.category_id?.category_name === "Laptop"
    );
  }, [products]);
  if (categoriesLoading || productsLoading) return <Loading />;
  return (
    <Layout>
      {/* <Header /> */}
      <>
        <Sidebar categories={categories} />
        <FlashSales products={products} />
        <NewProducts title="PC bán chạy" products={pcs} />
        <NewProducts title="Laptop bán chạy" products={laptops} />
      </>
    </Layout>
  );
}

export default HomePage;
