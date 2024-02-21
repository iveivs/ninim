import { Layout } from "antd";
import { useContext } from "react";
import AppContent from "./AppContent";
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";

export default function AppLayout() {
    useContext
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
