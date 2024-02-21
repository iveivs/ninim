import { Flex, Typography } from 'antd'
export default function CoinInfo({coin, withSymbol}) {
    return (
        <Flex align="center">
            <img
                src={coin.icon}
                alt={coin.name}
                style={{ width: 40, marginRight: 10 }}
            />
            <Typography.Title style={{ margin: 0 }} level={2}>
                {withSymbol && ({coin.symbol}) } {coin.name}
            </Typography.Title>
        </Flex>
    );
}
