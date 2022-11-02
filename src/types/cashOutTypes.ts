import { EntityType } from "./generalTypes"
import { UserDataType } from "./userTypes"

export type CashOutDataType = {
  user: UserDataType,
  id: number,
  extId: string,
  createdDate: string,
  cashOutDate: string,
  amount: number,
  status: number,
}

export type CashOutType = {
  cashOutPending: EntityType<CashOutDataType>,
  error: string,
}
