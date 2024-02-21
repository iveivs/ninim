import { Layout } from "antd";
const headerStyle = {
    width
    textAlign: "center",
    height: 60,
    // lineHeight: "64px",
    // backgroundColor: "#4096ff",
};
export default function AppHeader() {
    return (
        <Layout.Header style={headerStyle}>Header</Layout.Header>
    )
}