import { Select, Space, Typography, Flex, Divider, Form, InputNumber } from "antd";
import { useState } from "react";
import { useCrypto } from "../context/crypto-context";

export default function AddAssetForm() {
    const { crypto } = useCrypto();
    const [coin, setCoin] = useState(null);

    if (!coin) {
        return (
            <Select
                style={{
                    width: "100%",
                }}
                onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
                placeholder="Select coin"
                options={crypto.map((coin) => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon,
                }))}
                optionRender={(option) => (
                    <Space>
                        <img
                            style={{ width: 20 }}
                            src={option.data.icon}
                            alt={option.data.label}
                        />{" "}
                        {option.data.label}
                    </Space>
                )}
            />
        );
    }

    function onFinish(values) {

    }
    return (
        <Form
            name="basic"
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 10,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                
            }}
            onFinish={onFinish}
        >
            <Flex align="center">
                <img
                    src={coin.icon}
                    alt={coin.name}
                    style={{ width: 40, marginRight: 10 }}
                />
                <Typography.Title style={{ margin: 0 }} level={2}>
                    {coin.name}{" "}
                </Typography.Title>
            </Flex>

            <Divider />

            
            <Form.Item
                label="Amount"
                name="amount"
                rules={[
                    {
                        required: true,
                        type: 'number',
                        min: 0,
                        message: "Please input your username!",
                    },
                ]}
                >
                <InputNumber />
                </Form.Item>

                 <Form.Item
                    label="Price"
                    name="price"
                >
                    <InputNumber />
                </Form.Item>

                
                

                // <Form.Item >
                //     <Button type="primary" htmlType="submit">
                //         Add Asset
                //     </Button>
                // </Form.Item>
            </Form>
    );
}
