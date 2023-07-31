import React from "react";
import { GithubFilled } from "@ant-design/icons";
import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "antd";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div className="text-center mt-10">
      <p className="text-2xl">Sign In With</p>
      <GithubFilled
        style={{ fontSize: "36px", cursor: "pointer" }}
        onClick={() => signIn("github", { callbackUrl: "/" })}
      />
    </div>
  );
};

export default SignIn;

SignIn.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
