import type { OfflineDirectSigner } from '@cosmjs/proto-signing'

/** Version of the feature. */
export type InitiaGetOfflineSignerVersion = '1.0.0'

/** Name of the feature. */
export const InitiaGetOfflineSignerNamespace = 'initia:getOfflineSigner'

export type InitiaGetOfflineSignerFeature = {
  /** Namespace for the feature. */
  [InitiaGetOfflineSignerNamespace]: {
    /** Version of the feature API. */
    version: InitiaGetOfflineSignerVersion
    getOfflineSigner: InitiaGetOfflineSignerMethod
  }
}

export type InitiaGetOfflineSignerMethod = () => Promise<InitiaGetOfflineSignerOutput>

export type InitiaGetOfflineSignerOutput = OfflineDirectSigner
