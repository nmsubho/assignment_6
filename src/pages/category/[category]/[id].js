/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import category from "@/utils/category";
import { UserOutlined, StarFilled } from "@ant-design/icons";
import { Avatar, Button, Col, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Category = ({ product }) => {
  const router = useRouter();

  console.log(product);

  return (
    <div>
      <Row gutter={16}>
        <Col
          md={12}
          style={{
            padding: 10,
          }}
        >
          <img alt="example" src={product.image} width="100%" />
        </Col>
        <Col
          md={12}
          style={{
            padding: 10,
          }}
        >
          <div className="mt-2 text-xl">
            <p className="text-2xl">{product.name}</p>
            <p>{product.description}</p>
            <p className="m-0">Category: {category(product.category)}</p>
            <p className="m-0">Price: {product.price}</p>
            <p className="m-0">
              Status:{" "}
              <span
                className={`${
                  product.status === "Out of Stock" && "text-red-500"
                }`}
              >
                {product.status}
              </span>
            </p>
            <p className="m-0">Rating: {product.rating}</p>
            <p className="m-0">Average Rating: {product.averageRating}</p>
          </div>
          <div className="text-xl">
            <p className="text-2xl">Details</p>
            <ul>
              <li>Brand: {product.features?.brand}</li>
              <li>Model: {product.features?.model}</li>
              <li>Specification: {product.features?.specification}</li>
              <li>Port: {product.features?.port}</li>
              <li>Type: {product.features?.type}</li>
              <li>Resolution: {product.features?.resolution}</li>
              <li>Voltage: {product.features?.voltage}</li>
            </ul>
          </div>
          <Link key="add_to_builder" href={"/pc-builder"}>
            <Button
              className="text-orange-400"
              disabled={product.status === "Out of Stock"}
            >
              Add to Builder
            </Button>
          </Link>
        </Col>
      </Row>
      <div>
        {product.reviews.map((review, i) => (
          <div key={i + 1} className="my-4">
            <div className="flex items-center m-0">
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
              />
              <p className="mx-2 my-0">{review.username}</p>
              <p className="my-0 mx-2">.</p>
              <div className="flex items-center my-0">
                <StarFilled
                  style={{
                    color: "orange",
                  }}
                />
                <p className="mx-2 my-0">{review.rating}</p>
              </div>
            </div>
            <p className="ml-10 my-0">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps(context) {
  const res = await fetch(`${process.env.API_URL}/${context.params.id}`);
  const product = await res.json();
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
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
