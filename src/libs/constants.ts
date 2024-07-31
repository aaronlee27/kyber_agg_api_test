export const AggregatorDomain = `https://aggregator-api.kyberswap.com`;

export enum ChainName {
    MAINNET = `ethereum`,
    BSC = `bsc`,
    ARBITRUM = `arbitrum`,
    MATIC = `polygon`,
    OPTIMISM = `optimism`,
    AVAX = `avalanche`,
    BASE = `base`,
    CRONOS = `cronos`,
    ZKSYNC = `zksync`,
    FANTOM = `fantom`,
    LINEA = `linea`,
    POLYGONZKEVM = `polygon-zkevm`,
    AURORA = `aurora`,
    BTTC = `bttc`,
    SCROLL = `scroll`,    
}

export enum ChainId {
    MAINNET = 1,
    BSC = 56,
    ARBITRUM = 42161,
    MATIC = 137,
    OPTIMISM = 10,
    AVAX = 43114,
    BASE = 8453,
    CRONOS = 25,
    ZKSYNC = 324,
    FANTOM = 250,
    LINEA = 59144,
    POLYGONZKEVM = 1101,
    AURORA = 1313161554,
    BTTC = 199,
    ZKEVM = 1101,
    SCROLL = 534352,
  };

interface Token {
    address: string,
    chainId: string,
    decimals: number,
    symbol?: string,
    name?: string
}

// export const tokenIn: Token = {
//     address: '0x9B5F27f6ea9bBD753ce3793a07CbA3C74644330d',
//     chainId: ChainId.BTTC.toString(),
//     decimals: 18,
//     symbol: 'Binance-Peg BSC-USD_BSC',
//     name: 'USDT_b'
// };


export const tokenIn: Token = {
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    chainId: ChainId.BTTC.toString(),
    decimals: 18,
    symbol: 'bttc',
    name: 'Bittorrent'
};

export const tokenOut: Token = {
    address: '0xCa424b845497f7204D9301bd13Ff87C0E2e86FCF',
    chainId: ChainId.BTTC.toString(),
    decimals: 18,
    symbol: `USDC_b`,
    name: `USD Coin_BSC`
}

export const amountIn = Number(100 * 10**tokenIn.decimals);

export const targetChain = ChainName.BTTC;
