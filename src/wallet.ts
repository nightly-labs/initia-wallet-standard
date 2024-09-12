import { WalletWithInitiaFeatures } from './features'

export interface InitiaWallet extends WalletWithInitiaFeatures {
  /**
   * Website URL of the Wallet
   */
  readonly url: string
}
