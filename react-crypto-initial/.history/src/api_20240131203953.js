import { cryptoData, cryptoAssets} from './data'

export function fakeFetchCrypto(resolve) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve
        })
    })
    
}