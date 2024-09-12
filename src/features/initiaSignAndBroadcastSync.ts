import { ChainId, TransactionHash } from '../misc'

/** Version of the feature. */
export type InitiaSignAndBroadcastSyncVersion = '1.0.0'

/** Name of the feature. */
export const InitiaSignAndBroadcastSyncNamespace = 'initia:signAndBroadcastSync'

export type InitiaSignAndBroadcastSyncFeature = {
  /** Namespace for the feature. */
  [InitiaSignAndBroadcastSyncNamespace]: {
    /** Version of the feature API. */
    version: InitiaSignAndBroadcastSyncVersion
    signAndBroadcastSync: InitiaSignAndBroadcastSyncMethod
  }
}

export type InitiaSignAndBroadcastSyncMethod = (
  ...args: InitiaSignAndBroadcastSyncInput
) => Promise<InitiaSignAndBroadcastSyncOutput>

export type InitiaSignAndBroadcastSyncInput = [chainId: ChainId, txBody: Uint8Array, gas: number]

export type InitiaSignAndBroadcastSyncOutput = TransactionHash
