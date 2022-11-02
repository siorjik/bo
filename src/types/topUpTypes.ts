import { EntityType } from "./generalTypes"
import { UserDataType } from "./userTypes"

export type TopUpUsdkDataType = {
  requestType: number,
  user: UserDataType,
  id: number,
  extId: string,
  riskScore: number,
  riskLevelMarker: number,
  createdDate: string,
  reference: string,
  sourceAmount: number,
  sourceCurrency: string,
  destinationAmount: number,
  destinationCurrency: string,
  status: number,
}

export type TopUpType = {
  usdk: EntityType<TopUpUsdkDataType>,
  error: string,
}