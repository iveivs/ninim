import { Flex, Typography, Tag, Divider} from 'antd'
export default function CoinInfoModel({coin}) {
    return (
        <>
        <Flex align="center">
            <img src={coin.icon} alt={coin.name} style={{width: 40, marginRight: 10}}/>
            <Typography.Title style={{margin: 0}} level={2}>({coin.symbol}) {coin.name} </Typography.Title>
        </Flex>
        <Divider />
        <Typography.Paragraph>
            <Typography.Text strong> 1 hour</Typography.Text>
        </Typography.Paragraph>
        </>
    )
}