import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const PCBuilder = () => {
  return (
    <div>
      <h1>Pc Builder</h1>
    </div>
  );
};

export default PCBuilder;

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
