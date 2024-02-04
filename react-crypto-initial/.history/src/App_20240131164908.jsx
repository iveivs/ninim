import { Layout } from "antd";
import AppHeader from "./components/AppHeader";

const contentStyle = {
    textAlign: "center",
    minHeight: 'calc(100vh - 60px)',
    color: "#fff",
    backgroundColor: "#0958d9",
};
const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#1677ff",
};

export default function App() {
    return (
        <Layout >
            <AppHeader  />
            <Layout>
                <Layout.Sider width="25%" style={siderStyle}>
                    Sider
                </Layout.Sider>
                <Layout.Content style={contentStyle}>Content</Layout.Content>
            </Layout>
        </Layout>
    );
}
