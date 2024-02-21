import { createContext, useEffect, useState, useContext } from "react";
import { fakeFetchCrypto, fetchAssets } from '../api'
import { percentDifference } from '../utils'

const CryptoContext = createContext({
    assets: [],
    crypto: [],
    loading: false,
})

export function CryptoContextProvider({children}) {
    const [loading, setLoading ] = useState(false)
    const [crypto, setCrypto ] = useState([])
    const [assets, setAssets ] = useState([])

    function mapAsset(asset, result) {
        const coin = result.find((c) => c.id === asset.id)
                return {
                    grow: asset.price < coin.price,
                    growPercent: percentDifference(asset.price, coin.price),
                    totalAmount: asset.amount * coin.price,
                    totalProfit: asset.amount * coin.price - asset.amount * asset.price,
                    ...asset
                }
    }

    useEffect(() => {
        async function preload() {
            setLoading(true)
            const { result } = await fakeFetchCrypto()
            const assets = await fetchAssets()

            setAssets(mapAssets(asset, result))
            setCrypto(result)
            setLoading(false)
        }
        preload()
    }, []) 

    function addAsset(newAsset) {
        setAssets(prev => [...prev, newAsset])
    }
    return <CryptoContext.Provider
                value={{
                    loading,
                    crypto,
                    assets,
                    mapAsset,
                }}
            >
        {children}
    </CryptoContext.Provider>
}

export default CryptoContext

export function useCrypto() {
    return useContext(CryptoContext)
}