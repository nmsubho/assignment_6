/* eslint-disable @next/next/no-img-element */
import category from "@/utils/category";
import { Button, Card } from "antd";
import Link from "next/link";
const { Meta } = Card;

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 300,
        }}
        cover={<img alt="example" src={product.image} />}
        actions={[
          <Link key="add_to_builder" href={"/pc-builder"}>
            <Button
              type="link"
              className="text-orange-400"
              disabled={product.status === "Out of Stock"}
            >
              Add to Builder
            </Button>
          </Link>,
          <Link
            href={`/category/${product.category}/${product._id}`}
            key="details"
          >
            <Button type="link" className="text-orange-400">
              Details
            </Button>
          </Link>,
        ]}
      >
        <Meta title={product.name} description={product.description} />
        <div className="mt-2">
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
          <p className="m-0">Rating: {product.averageRating}</p>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
