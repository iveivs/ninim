import { Layout } from "antd";
import { useContext } from "react";
import CryptoContext from "../../context/crypto-context";
import AppContent from "./AppContent";
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";

export default function AppLayout() {
    const {useContext(CryptoContext)
    return (
        <Layout>
            <AppHeader />
            <Layout>
                <AppSider />
                <AppContent />
            </Layout>
        </Layout>
    );
}
