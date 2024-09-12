import type { Chain } from '@initia/initia-registry-types'

/** Version of the feature. */
export type InitiaAddLayerVersion = '1.0.0'

/** Name of the feature. */
export const InitiaAddLayerNamespace = 'initia:addLayer'

export type InitiaAddLayerFeature = {
  /** Namespace for the feature. */
  [InitiaAddLayerNamespace]: {
    /** Version of the feature API. */
    version: InitiaAddLayerVersion
    addLayer: InitiaAddLayerMethod
  }
}

export type InitiaAddLayerMethod = (...args: InitiaAddLayerInput) => Promise<InitiaAddLayerOutput>

export type InitiaAddLayerInput = [layerInfo: Chain]

export type InitiaAddLayerOutput = boolean
