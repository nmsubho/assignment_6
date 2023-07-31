import RootLayout from "@/components/Layouts/RootLayout";
import { AppContext } from "@/config/app.context";
import category from "@/utils/category";
import { Button } from "antd";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-hot-toast";

const PCBuilder = () => {
  const categories = [
    "cpu",
    "motherboard",
    "ram",
    "power-supply",
    "storage",
    "monitor",
    "other",
  ];

  const { builderProducts, setBuilderProducts } = useContext(AppContext);

  const builderProductsCategories = [];

  const total = builderProducts.reduce((accumulator, currentValue) => {
    if (!builderProductsCategories.includes(currentValue.category)) {
      builderProductsCategories.push(currentValue.category);
    }
    return Number(accumulator) + Number(currentValue.price);
  }, 0);

  const handleCompleteBuild = () => {
    toast.success("Build completed successfully!");
    setBuilderProducts([]);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-xl">Total: {total}</p>
        <Button
          className="text-green-400"
          disabled={builderProductsCategories.length < 6}
          onClick={handleCompleteBuild}
        >
          Complete Build
        </Button>
      </div>
      {categories.map((categoryId) => (
        <div
          key={categoryId}
          style={{
            border: "1px solid orange",
          }}
          className="p-2 my-2"
        >
          <div className="flex items-center justify-between">
            <p className="text-xl">{category(categoryId)}</p>
            <Link href={`/category/${categoryId}`}>
              <Button className="text-orange-400">Select</Button>
            </Link>
          </div>
          {builderProducts.map((product, i) => {
            if (product.category === categoryId) {
              return (
                <p key={i}>
                  {product.name} | Price: {product.price}
                </p>
              );
            }
          })}
        </div>
      ))}
      {/* <div>
        {builderProducts?.map((data) => (
          <p key={data._key}>{data.name}</p>
        ))}
      </div> */}
    </div>
  );
};

export default PCBuilder;

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
