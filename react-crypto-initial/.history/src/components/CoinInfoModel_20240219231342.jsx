import { Flex, Typography, Tag} from 'antd'
export default function CoinInfoModel({coin}) {
    return (
        <Flex align="center">
            <img src={coin.icon} alt={coin.name} style={{width: 40}}/>
            <Typography.Title level={2}>{}</Typography.Title>
        </Flex>
    )
}