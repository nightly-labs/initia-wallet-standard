import { ChainId, TransactionHash } from '../misc'

/** Version of the feature. */
export type InitiaSignAndBroadcastBlockVersion = '1.0.0'

/** Name of the feature. */
export const InitiaSignAndBroadcastBlockNamespace = 'initia:signAndBroadcastBlock'

export type InitiaSignAndBroadcastBlockFeature = {
  /** Namespace for the feature. */
  [InitiaSignAndBroadcastBlockNamespace]: {
    /** Version of the feature API. */
    version: InitiaSignAndBroadcastBlockVersion
    signAndBroadcastBlock: InitiaSignAndBroadcastBlockMethod
  }
}

export type InitiaSignAndBroadcastBlockMethod = (
  ...args: InitiaSignAndBroadcastBlockInput
) => Promise<InitiaSignAndBroadcastBlockOutput>

export type InitiaSignAndBroadcastBlockInput = [chainId: ChainId, txBody: Uint8Array, gas: number]

export type InitiaSignAndBroadcastBlockOutput = TransactionHash
