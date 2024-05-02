import { Home } from "@mui/icons-material";
import { Breadcrumbs, Link } from "@mui/material";
import { Params, useParams } from "react-router-dom";
import Layout from "~/components/layout/layout";
import SkeletonProduct from "~/components/loading/skeleton-product";
import SingleProduct from "~/components/product/single-product";
import { useGetProductBySlugQuery } from "~/services/products";

function ProductDetail() {
  const { slug } = useParams<Readonly<Params<string>>>();
  const { data, isFetching } = useGetProductBySlugQuery(slug!);
  console.log(data);
  return (
    <Layout>
      <>
        <Breadcrumbs
          className=""
          sx={{
            fontSize: "14px",
            padding: "10px 0px",
          }}
        >
          <Link
            underline="none"
            className="flex items-center gap-x-2 cursor-pointer"
            href="/"
          >
            <Home />
            <span>Trang chủ</span>
          </Link>
          <Link
            underline="none"
            className="flex items-center gap-x-2 cursor-pointer"
            href="/"
          >
            {data?.metadata.category_id.category_name}
          </Link>
          <Link
            underline="none"
            className="flex items-center gap-x-2 cursor-pointer"
            color="inherit"
            href="/"
          >
            {data?.metadata.name}
          </Link>
        </Breadcrumbs>
        {isFetching ? (
          <SkeletonProduct />
        ) : (
          <SingleProduct product={data?.metadata} />
        )}
      </>
    </Layout>
  );
}

export default ProductDetail;
