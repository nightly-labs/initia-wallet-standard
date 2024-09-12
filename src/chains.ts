export type ChainsId = `${string}:${string}` // e.g. 'initia:devnet'

/** INITIA Devnet */
export const INITIA_DEVNET_CHAIN = 'initia:devnet'

/** INITIA Testnet */
export const INITIA_TESTNET_CHAIN = 'initia:testnet'

/** INITIA Localnet */
export const INITIA_LOCALNET_CHAIN = 'initia:localnet'

/** INITIA Mainnet */
export const INITIA_MAINNET_CHAIN = 'initia:mainnet'

export const INITIA_CHAINS = [
  INITIA_DEVNET_CHAIN,
  INITIA_TESTNET_CHAIN,
  INITIA_LOCALNET_CHAIN,
  INITIA_MAINNET_CHAIN
] as const

export type InitiaChain =
  | typeof INITIA_DEVNET_CHAIN
  | typeof INITIA_TESTNET_CHAIN
  | typeof INITIA_LOCALNET_CHAIN
  | typeof INITIA_MAINNET_CHAIN
