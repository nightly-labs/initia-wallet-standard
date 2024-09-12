/** Version of the feature. */
export type InitiaGetVersionVersion = '1.0.0'

/** Name of the feature. */
export const InitiaGetVersionNamespace = 'initia:getVersion'

export type InitiaGetVersionFeature = {
  /** Namespace for the feature. */
  [InitiaGetVersionNamespace]: {
    /** Version of the feature API. */
    version: InitiaGetVersionVersion
    getVersion: InitiaGetVersionMethod
  }
}

export type InitiaGetVersionMethod = () => Promise<string>
