import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/ui/ProductCard";
import category from "@/utils/category";
import { Button, Card, Col, Row } from "antd";
import Link from "next/link";

export default function Home({ products }) {
  const categories = [
    "cpu",
    "motherboard",
    "ram",
    "power-supply",
    "storage",
    "monitor",
    "other",
  ];
  return (
    <div>
      <div className="mt-4">
        <img
          alt="example"
          src="https://www.lendlease.com/contentassets/c0f564fd377d46a299346acaea847c01/1900x500_disruptivetechnology.jpg?width=300&height=400&upscale=false&mode=max&quality=80"
          width="100%"
        />
      </div>

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
      <h1 className="text-5xl">Featured Categories</h1>

      <Row gutter={16}>
        {categories.map((categoryId) => (
          <Col
            md={6}
            key={categoryId}
            style={{
              padding: 10,
            }}
          >
            <Card
              hoverable
              style={{
                width: 300,
              }}
            >
              <Link href={`/category/${categoryId}`}>
                <p className="text-xl text-center text-black">
                  {category(categoryId)}
                </p>
              </Link>
            </Card>
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