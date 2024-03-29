import { Layout, Select, Space, Button } from "antd";
import { useCrypto } from "../../context/crypto-context";

const headerStyle = {
    width: "100%",
    textAlign: "center",
    height: 60,
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4096ff",
};

const handleChange = (value) => {
    console.log(`selected ${value}`);
};
// const options = [
//     {
//         label: "China",
//         value: "china",
//         emoji: "🇨🇳",
//         desc: "China (中国)",
//     },
//     {
//         label: "USA",
//         value: "usa",
//         emoji: "🇺🇸",
//         desc: "USA (美国)",
//     },
//     {
//         label: "Japan",
//         value: "japan",
//         emoji: "🇯🇵",
//         desc: "Japan (日本)",
//     },
//     {
//         label: "Korea",
//         value: "korea",
//         emoji: "🇰🇷",
//         desc: "Korea (韩国)",
//     },
// ];
export default function AppHeader() {
    const { crypto } = useCrypto()
    return (
        <Layout.Header style={headerStyle}>
            <Select
                style={{
                    width: 250,
                }}
                value="press / to open"
                onChange={handleChange}
                optionLabelProp="label"
                options={crypto.map((coin) =)}
                optionRender={(option) => (
                    <Space>
                        <img /> bitcoin
                    </Space>
                )}
            />
            <Button type="primary">
                Add asset
            </Button>
        </Layout.Header>
    );
}
