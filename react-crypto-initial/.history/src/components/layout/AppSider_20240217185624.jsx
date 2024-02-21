import { Layout, Card } from "antd";
const siderStyle = {
    // textAlign: "center",
    // lineHeight: "120px",
    // color: "#fff",
    // backgroundColor: "#1677ff",
    padding: '1rem',
};
export default function Sider() {
    return (
        <Layout.Sider width="25%" style={siderStyle}>
            Sider
            <Card title="Default size card" extra={<a href='#'>More</a> } style={{width: 300}} >
                <p>Card</p>
            </Card>
        </Layout.Sider>
    );
}
