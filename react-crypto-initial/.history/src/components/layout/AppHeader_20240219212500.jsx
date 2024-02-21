import { Layout, Select, Space, Button, Modal } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { useCrypto } from "../../context/crypto-context";
import CoinInfoModel from "./CoinInfoModel";

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


export default function AppHeader() {
    const [select, setSelect] = useState(false)
    const [coin, setCoin] = useState(null)
    const [modal, setModal] = useState(false)
    const { crypto } = useCrypto()

    useEffect(() => {
        const keypress = event => {
            if(event.key === '/' ){
                setSelect(prev => !prev)
            }
        }
        document.addEventListener('keypress', keypress)
        return () => document.removeEventListener('keypress', keypress)
    }, [])

    function handleSelect(value) {
        setCoin(crypto.find(c => c.id))
        setModal(true)
    }

    return (
        <Layout.Header style={headerStyle}>
            <Select
                style={{
                    width: 250,
                }}
                open={select}
                onClick={() => setSelect(prev => !prev)}
                onSelect={handleSelect}
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
            <Button type="primary">
                Add asset
            </Button>
            <Modal 
                footer={null}
                open={modal} 
                onCancel={() => setModal(false)}>
                <CoinInfoModel  />
            </Modal>
        </Layout.Header>
    );
}
