import { Layout, Select, Space, Button, Modal, Drawer } from "antd";
import { useState } from "react"
import { useCrypto } from "../context/crypto-context";

export default function AddAssetForm() {
    const { crypto }useCrypto
    const [coin, setCoin] = useState(null)

    if(!coin) {
        return (
            <Select
                style={{
                    width: 250,
                }}
                open={select}
                onClick={() => setSelect(prev => !prev)}
                onSelect={(v) => }
                value="press / to open"
                options={crypto.map((coin) => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon
                }))}
                optionRender={(option) => (
                    <Space>
                        <img style={{width: 20}} src={option.data.icon} alt={option.data.label} /> {option.data.label}
                    </Space>
                )}
            />
        )
    }
    return (
        <form >FORM ASSET</form>
    )
}