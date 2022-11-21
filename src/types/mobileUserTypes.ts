import { EntityType } from "./generalTypes"

export type MobileUserDataType = {
  id: string,
  registrationDate: string,
  firstName: string,
  lastName: string,
  email: string,
  walletAddressUsd: string,
  status: number,
  phoneNumber: string,
  canInvite: boolean,
  roles: string[],
  riskScore: number,
  riskLevelMarker: number,
}

export type MobileUserType = EntityType<MobileUserDataType> & { error: string }
