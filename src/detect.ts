import {
  Wallet,
  WalletWithFeatures,
  WalletsEventsListeners,
  getWallets
} from '@wallet-standard/core'
import { MinimallyRequiredFeatures } from './features'
import { InitiaWallet } from './wallet'

// These features are absolutely required for wallets to function in the initia ecosystem.
// Eventually, as wallets have more consistent support of features, we may want to extend this list.
const REQUIRED_FEATURES: (keyof MinimallyRequiredFeatures)[] = [
  'initia:getVersion',
  'initia:getAddress',
  'initia:getOfflineSigner',
  'initia:getOfflineSignerOnlyAmino',
  'initia:addLayer',
  'initia:signAndBroadcastSync',
  'initia:signAndBroadcastBlock',
  'initia:signArbitrary',
  'initia:verifyArbitrary',
  'initia:onAccountChange',
  'initia:disconnect'
]

export function isWalletWithRequiredFeatureSet<AdditionalFeatures extends Wallet['features']>(
  wallet: Wallet,
  additionalFeatures: (keyof AdditionalFeatures)[] = []
): wallet is WalletWithFeatures<MinimallyRequiredFeatures & AdditionalFeatures> {
  return [...REQUIRED_FEATURES, ...additionalFeatures].every(
    (feature) => feature in wallet.features
  )
}

/**
 * Helper function to get only initia wallets
 * @returns initia compatible wallets and `on` event to listen to wallets register event
 */
export function getInitiaWallets(): {
  initiaWallets: InitiaWallet[]
  on: <E extends keyof WalletsEventsListeners>(
    event: E,
    listener: WalletsEventsListeners[E]
  ) => () => void
} {
  const { get, on } = getWallets()
  const wallets = get()
  const initiaWallets: Wallet[] = []
  wallets.map((wallet: Wallet) => {
    const isinitia = isWalletWithRequiredFeatureSet(wallet)
    if (isinitia) {
      initiaWallets.push(wallet)
    }
  })
  return { initiaWallets: initiaWallets as InitiaWallet[], on }
}
