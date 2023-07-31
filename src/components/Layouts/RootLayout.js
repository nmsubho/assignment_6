import { Breadcrumb, Button, Dropdown, Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
import { useSession, signOut } from "next-auth/react";

const RootLayout = ({ children }) => {
  const { data: session } = useSession();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      key: "1",
      label: <Link href="/category/cpu">CPU / Processor</Link>,
    },
    {
      key: "2",
      label: <Link href="/category/motherboard">Motherboard</Link>,
    },
    {
      key: "3",
      label: <Link href="/category/ram">RAM</Link>,
    },
    {
      key: "4",
      label: <Link href="/category/power-supply">Power Supply</Link>,
    },
    {
      key: "5",
      label: <Link href="/category/storage">Storage Device</Link>,
    },
    {
      key: "6",
      label: <Link href="/category/monitor">Monitor</Link>,
    },
    {
      key: "7",
      label: <Link href="/category/other">Others</Link>,
    },
  ];

  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Link href="/">
          <Button type="link" className="text-gray-400 hover:text-white">
            Home
          </Button>
        </Link>
        <Link href="/pc-builder">
          <Button type="link" className="text-gray-400 hover:text-white">
            PC Builder
          </Button>
        </Link>
        <Dropdown menu={{ items }} placement="bottomLeft" arrow theme="dark">
          <Button type="link" className="text-gray-400 hover:text-white">
            Category
          </Button>
        </Dropdown>
        {session?.user ? (
          <Button
            type="link"
            className="text-gray-400 hover:text-white"
            onClick={() => signOut()}
          >
            Sign Out
          </Button>
        ) : (
          <Link href="/sign-in">
            <Button type="link" className="text-gray-400 hover:text-white">
              Sign In
            </Button>
          </Link>
        )}
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            // background: colorBgContainer,
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "darkgray",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default RootLayout;
