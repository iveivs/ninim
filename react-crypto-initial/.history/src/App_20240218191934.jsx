import { Layout } from "antd";
import AppContent from "./components/layout/AppContent";
import AppHeader from "./components/layout/AppHeader";
import AppSider from "./components/layout/AppSider";
import { CryptoContextProvider } from "./context/crypto-context";

export default function App() {
    return (
        <CryptoContextProvider>

        </CryptoContextProvider>
        
    );
}
