import RootLayout from "@/components/Layouts/RootLayout";

export default function Home() {
  return (
    <div>
      <h1 className=" text-5xl">Hello!</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
