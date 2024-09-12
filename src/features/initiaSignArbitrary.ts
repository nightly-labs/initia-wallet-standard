/** Version of the feature. */
export type InitiaSignArbitraryVersion = '1.0.0'

/** Name of the feature. */
export const InitiaSignArbitraryNamespace = 'initia:signArbitrary'

export type InitiaSignArbitraryFeature = {
  /** Namespace for the feature. */
  [InitiaSignArbitraryNamespace]: {
    /** Version of the feature API. */
    version: InitiaSignArbitraryVersion
    signArbitrary: InitiaSignArbitraryMethod
  }
}

export type InitiaSignArbitraryMethod = (
  ...args: InitiaSignArbitraryInput
) => Promise<InitiaSignArbitraryOutput>

export type InitiaSignArbitraryInput = [data: string | Uint8Array]

export type InitiaSignArbitraryOutput = string
