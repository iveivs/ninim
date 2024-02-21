import { Layout, Card, Statistic, List, Typography } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
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
            <Card style={{marginBottom: '1rem'}} >
                <Statistic
                    title="Active"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                />
                <List
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </Card>
            <Card>
                <Statistic
                    title="Idle"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                />
            </Card>
        </Layout.Sider>
    );
}
