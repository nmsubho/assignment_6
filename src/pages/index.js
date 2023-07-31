import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/ui/ProductCard";
import { Col, Row } from "antd";

export default function Home({ products }) {
  return (
    <div>
      <h1 className="text-5xl">Featured Products</h1>

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
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`${process.env.API_URL}`);
  const products = await res.json();

  const randomNumber = Math.floor(Math.random() * (products?.data.length - 7));

  return {
    props: {
      products: products?.data?.slice(randomNumber, randomNumber + 6),
    },
    revalidate: 3600 * 3,
  };
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};