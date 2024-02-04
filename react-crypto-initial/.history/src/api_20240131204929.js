import { cryptoData, cryptoAssets} from './data'

export function fakeFetchCrypto(resolve) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData)
        }, 2000)
    }) 
}

export function fetchA(resolve) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData)
        }, 2000)
    }) 
}