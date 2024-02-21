import { Layout } from "antd";
const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 60,
    lineHeight: "64px",
    backgroundColor: "#4096ff",
};
export default function AppHeader() {
    return (
        <Layout.Header style={headerStyle}>Header</Layout.Header>
    )
}