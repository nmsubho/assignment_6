import RootLayout from "@/components/Layouts/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const Category = (props) => {
  const router = useRouter();

  console.log(props);

  return (
    <div>
      <h1>This is category page: {router.query.id}</h1>
    </div>
  );
};

export default Category;

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps(context) {
  const res = await fetch(`${process.env.API_URL}/${context.params.id}`);
  const products = await res.json();

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: products,
    },
    revalidate: 3600 * 3,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}`);
  const products = await res.json();

  const paths = products.data.map((product) => ({
    params: {
      id: `${product.id}`,
      category: product?.category,
    },
  }));

  return { paths, fallback: true };
}
