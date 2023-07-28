import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "antd";

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl">Hello!</h1>
      <Button type="primary">Hello</Button>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
