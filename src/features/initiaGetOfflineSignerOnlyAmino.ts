import type { OfflineAminoSigner } from '@cosmjs/amino'

/** Version of the feature. */
export type InitiaGetOfflineSignerOnlyAminoVersion = '1.0.0'

/** Name of the feature. */
export const InitiaGetOfflineSignerOnlyAminoNamespace = 'initia:getOfflineSignerOnlyAmino'

export type InitiaGetOfflineSignerOnlyAminoFeature = {
  /** Namespace for the feature. */
  [InitiaGetOfflineSignerOnlyAminoNamespace]: {
    /** Version of the feature API. */
    version: InitiaGetOfflineSignerOnlyAminoVersion
    getOfflineSignerOnlyAmino: InitiaGetOfflineSignerOnlyAminoMethod
  }
}

export type InitiaGetOfflineSignerOnlyAminoMethod =
  () => Promise<InitiaGetOfflineSignerOnlyAminoOutput>

export type InitiaGetOfflineSignerOnlyAminoOutput = OfflineAminoSigner
