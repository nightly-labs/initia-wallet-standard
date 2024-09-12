import { ChainId, WalletAddress } from '../misc'

/** Version of the feature. */
export type InitiaGetAddressVersion = '1.0.0'

/** Name of the feature. */
export const InitiaGetAddressNamespace = 'initia:getAddress'

export type InitiaGetAddressFeature = {
  /** Namespace for the feature. */
  [InitiaGetAddressNamespace]: {
    /** Version of the feature API. */
    version: InitiaGetAddressVersion
    getAddress: InitiaGetAddressMethod
  }
}

export type InitiaGetAddressMethod = (
  ...args: InitiaGetAddressInput
) => Promise<InitiaGetAddressOutput>

export type InitiaGetAddressInput = [chainId: ChainId]

export type InitiaGetAddressOutput = WalletAddress
