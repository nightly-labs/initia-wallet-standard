/** Version of the feature. */
export type InitiaVerifyArbitraryVersion = '1.0.0'

/** Name of the feature. */
export const InitiaVerifyArbitraryNamespace = 'initia:verifyArbitrary'

export type InitiaVerifyArbitraryFeature = {
  /** Namespace for the feature. */
  [InitiaVerifyArbitraryNamespace]: {
    /** Version of the feature API. */
    version: InitiaVerifyArbitraryVersion
    verifyArbitrary: InitiaVerifyArbitraryMethod
  }
}

export type InitiaVerifyArbitraryMethod = (
  ...args: InitiaVerifyArbitraryInput
) => Promise<InitiaVerifyArbitraryOutput>

export type InitiaVerifyArbitraryInput = [data: string | Uint8Array, signature: string]

export type InitiaVerifyArbitraryOutput = boolean
