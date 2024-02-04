import { Layout } from "antd";
const siderStyle = {
    // textAlign: "center",
    // lineHeight: "120px",
    // color: "#fff",
    // backgroundColor: "#1677ff",
    padding: '1rem,
};
export default function Sider() {
    return (
        <Layout.Sider width="25%" style={siderStyle}>
            Sider
        </Layout.Sider>
    );
}
