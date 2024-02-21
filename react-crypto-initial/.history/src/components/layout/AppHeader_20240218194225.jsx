import { Layout } from "antd";
const headerStyle = {
    width: '100%',
    textAlign: "center",
    height: 60,
    display: 'flex',
    justifyContent: 'space-between'
    // lineHeight: "64px",
    // backgroundColor: "#4096ff",
};
export default function AppHeader() {
    return (
        <Layout.Header style={headerStyle}>Header</Layout.Header>
    )
}