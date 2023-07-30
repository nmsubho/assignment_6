import RootLayout from "@/components/Layouts/RootLayout";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
const { Meta } = Card;

const Product = ({ products }) => {
  const router = useRouter();

  return (
    <Row gutter={16}>
      {products.map((product) => (
        <Col
          md={8}
          key={product._id}
          style={{
            padding: 10,
          }}
        >
          <Link href={`/category/${router.query.category}/${product._id}`}>
            <Card
              hoverable
              style={{
                width: 300,
              }}
              cover={<img alt="example" src={product.image} />}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title={product.name}
                description={product.description}
              />
            </Card>
          </Link>
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

  const paths = products?.data.map((product) => ({
    params: { category: product.category },
  }));
  return { paths, fallback: true };
}

Product.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
