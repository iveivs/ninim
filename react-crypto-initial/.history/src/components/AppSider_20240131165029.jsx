import { Layout } from "antd";
const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 60,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#4096ff",
};
export default function Sider() {
    return (
        <Layout.Sider width="25%" style={siderStyle}>
                    Sider
                </Layout.Sider>
    )
}