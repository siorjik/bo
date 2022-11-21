import { EntityType } from "./generalTypes"
import { UserDataType } from "./userTypes"

export type TransactionDataType = {
  id: number,
  createdDate: string,
  bwsId: string,
  originTxId: number | null,
  txType: string,
  transferStatus: number,
  walletType: number,
  amountCoins: number,
  amountUsd: number,
  commissionCoins: number,
  commissionUsd: number,
  dashToUsdRate: number,
  senderWalletAddress: string | null,
  recipientWalletAddress: string,
  sender: UserDataType,
  recipient: UserDataType,
}

export type TransactionType = {
  all: EntityType<TransactionDataType>
  error: string,
}
