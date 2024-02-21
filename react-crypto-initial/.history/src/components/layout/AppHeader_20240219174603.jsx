import { Layout, Select, Space, Button, Modal } from "antd";
import { useEffect } from "react";
import { useState } from "react";
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


export default function AppHeader() {
    const [select, setSelect] = useState(false)
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
        console.log(value);
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
                title="Basic Modal" 
                open={modal} 
                onOk={} 
                onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </Layout.Header>
    );
}
