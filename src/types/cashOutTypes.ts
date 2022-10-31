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
  cashOutPending: {
    list: {
      items: CashOutDataType[],
      pageNumber: number,
      count: number,
    },
    data?: CashOutDataType,
    listFetchStart: boolean,
    listFetchFinished: boolean,
  }
  error: string,
}
