import { Breadcrumb, Button, Dropdown, Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
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
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            {
              key: "1",
              label: <Link href="/pc-builder">PC Builder</Link>,
            },
          ]}
        />
        <Dropdown menu={{ items }} placement="bottomLeft" arrow theme="dark">
          <Button type="link" className="text-gray-400 hover:text-white">
            Category
          </Button>
        </Dropdown>
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
