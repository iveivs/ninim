import { Layout } from "antd";
const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#4096ff",
};
const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#0958d9",
};
const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#1677ff",
};
const layoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
    width: "calc(50% - 8px)",
    maxWidth: "calc(50% - 8px)",
};

export default function App() {
    return (
        <Layout style={layoutStyle}>
            <Layout.Header style={headerStyle}>Header</Layout.Header>
            <Layout>
                <Layout.Sider width="25%" style={siderStyle}>
                    Sider
                </Layout.Sider>
                <Layout.Content style={contentStyle}>Content</Layout.Content>
            </Layout>
        </Layout>
    );
}
