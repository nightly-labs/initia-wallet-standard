import type { IdentifierRecord, WalletWithFeatures } from '@wallet-standard/core'
import { InitiaGetVersionFeature } from './initiaGetVersion'
import { InitiaGetAddressFeature } from './initiaGetAddress'
import { InitiaGetOfflineSignerFeature } from './initiaGetOfflineSigner'
import { InitiaGetOfflineSignerOnlyAminoFeature } from './initiaGetOfflineSignerOnlyAmino'
import { InitiaAddLayerFeature } from './initiaAddLayer'
import { InitiaSignAndBroadcastSyncFeature } from './initiaSignAndBroadcastSync'
import { InitiaSignAndBroadcastBlockFeature } from './initiaSignAndBroadcastBlock'
import { InitiaSignArbitraryFeature } from './initiaSignArbitrary'
import { InitiaVerifyArbitraryFeature } from './initiaVerifyArbitrary'
import { InitiaOnAccountChangeFeature } from './initiaOnAccountChange'
import { InitiaDisconnectFeature } from './initiaDisconnect'

/**
 * Wallet Standard features that are unique to Initia, and that all Initia wallets are expected to implement.
 */
export type InitiaFeatures = InitiaGetVersionFeature &
  InitiaGetAddressFeature &
  InitiaGetOfflineSignerFeature &
  InitiaGetOfflineSignerOnlyAminoFeature &
  InitiaAddLayerFeature &
  InitiaSignAndBroadcastSyncFeature &
  InitiaSignAndBroadcastBlockFeature &
  InitiaSignArbitraryFeature &
  InitiaVerifyArbitraryFeature &
  InitiaOnAccountChangeFeature &
  InitiaDisconnectFeature

/**
 * Represents a wallet with all Initia features.
 */
export type WalletWithInitiaFeatures = WalletWithFeatures<InitiaFeatures>

/**
 * Represents a wallet with the absolute minimum feature set required to function in the Initia ecosystem.
 */
export type WalletWithRequiredFeatures = WalletWithFeatures<
  MinimallyRequiredFeatures & IdentifierRecord<unknown>
>

/**
 * Represents the absolute minimum feature set required to function in the Initia ecosystem.
 */
export type MinimallyRequiredFeatures = InitiaFeatures

export * from './initiaGetVersion'
export * from './initiaGetAddress'
export * from './initiaGetOfflineSigner'
export * from './initiaGetOfflineSignerOnlyAmino'
export * from './initiaAddLayer'
export * from './initiaSignAndBroadcastSync'
export * from './initiaSignAndBroadcastBlock'
export * from './initiaSignArbitrary'
export * from './initiaVerifyArbitrary'
export * from './initiaOnAccountChange'
export * from './initiaDisconnect'
