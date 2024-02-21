import { Flex, Typography, } from 'antd'
export default function CoinInfoModel({coin}) {
    return (
        <h2>{coin.name}</h2>
    )
}