import { Token } from '@uniswap/sdk-core'
import { ChainId } from './chainId'

export const COINBASE_WRAPPED_STAKED_ETH = new Token(
  ChainId.MAINNET,
  '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
  18,
  'cbETH',
  'Coinbase Wrapped Staked ETH'
)

export const COINBASE_WRAPPED_STAKED_ETH_BASE_GOERLI = new Token(
  ChainId.BASE_GOERLI,
  '0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2',
  18,
  'cbETH',
  'Coinbase Wrapped Staked ETH'
)

export const COINBASE_WRAPPED_STAKED_ETH_ARBITRUM_ONE = new Token(
  ChainId.ARBITRUM_ONE,
  '0x1DEBd73E752bEaF79865Fd6446b0c970EaE7732f',
  18,
  'cbETH',
  'Coinbase Wrapped Staked ETH'
)

export const DAI = new Token(
  ChainId.MAINNET,
  '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  18,
  'DAI',
  'Dai Stablecoin'
)
export const DAI_ARBITRUM_ONE = new Token(
  ChainId.ARBITRUM_ONE,
  '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  18,
  'DAI',
  'Dai stable coin'
)
export const DAI_OPTIMISM = new Token(
  ChainId.OPTIMISM,
  '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  18,
  'DAI',
  'Dai stable coin'
)
export const DAI_POLYGON = new Token(
  ChainId.POLYGON,
  '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  18,
  'DAI',
  'Dai Stablecoin'
)

export const DAI_BNB = new Token(
  ChainId.BNB,
  '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
  18,
  'DAI',
  'Dai Stablecoin'
)

export const DAI_AVALANCHE = new Token(
  ChainId.AVALANCHE,
  '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
  18,
  'DAI.e Token',
  'DAI.e'
)

export const USDT = new Token(
  ChainId.MAINNET,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD'
)

export const USDT_BNB = new Token(
  ChainId.BNB,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD'
)
