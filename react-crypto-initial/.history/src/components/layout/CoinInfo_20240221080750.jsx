import { Flex, Typography } from 'antd'
export default function CoinInfo({}) {
    return (
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
    );
}
