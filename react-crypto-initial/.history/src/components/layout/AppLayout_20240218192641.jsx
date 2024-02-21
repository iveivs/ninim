import { Layout } from "antd";
import AppContent from "./AppContent";
import AppHeader from "./components/layout/AppHeader";
import AppSider from "./components/layout/AppSider";

export default function AppLayout() {
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
