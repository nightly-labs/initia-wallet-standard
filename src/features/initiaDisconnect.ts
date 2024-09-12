/** Version of the feature. */
export type InitiaDisconnectVersion = '1.0.0'

/** Name of the feature. */
export const InitiaDisconnectNamespace = 'initia:disconnect'

export type InitiaDisconnectFeature = {
  /** Namespace for the feature. */
  [InitiaDisconnectNamespace]: {
    /** Version of the feature API. */
    version: InitiaDisconnectVersion
    disconnect: InitiaDisconnectMethod
  }
}

export type InitiaDisconnectMethod = () => Promise<void>
