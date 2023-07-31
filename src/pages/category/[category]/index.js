import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/ui/ProductCard";
import { Col, Row } from "antd";


const Product = ({ products }) => {
  return (
    <Row gutter={16}>
      {products.map((product) => (
        <Col
          md={6}
          key={product._id}
          style={{
            padding: 10,
          }}
        >
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default Product;

export async function getStaticProps(context) {
  const res = await fetch(
    `${process.env.API_URL}?category=${context.params.category}`
  );
  const products = await res.json();

  return {
    props: {
      products: products?.data,
    },
    revalidate: 3600 * 3,
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}`);
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { category: product.category },
  }));
  return { paths, fallback: false };
}

Product.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
