import { ChainId, Unsubscribe, WalletAddress } from '../misc'

/** Version of the feature. */
export type InitiaOnAccountChangeVersion = '1.0.0'

/** Name of the feature. */
export const InitiaOnAccountChangeNamespace = 'initia:onAccountChange'

export type InitiaOnAccountChangeFeature = {
  /** Namespace for the feature. */
  [InitiaOnAccountChangeNamespace]: {
    /** Version of the feature API. */
    version: InitiaOnAccountChangeVersion
    onAccountChange: InitiaOnAccountChangeMethod
  }
}

export type InitiaOnAccountChangeMethod = (input: InitiaOnAccountChangeInput) => Promise<void>

export type InitiaOnAccountChangeInput = (newAccount: {
  address: WalletAddress
  chainId: ChainId
}) => Unsubscribe
