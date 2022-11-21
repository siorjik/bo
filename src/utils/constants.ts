type ObjValueWithColorType = { [key: string | number]: { value: string, color: string } }

export const collapseItems = {
  KWL: 'kwl',
  TOP_UP: 'topUp',
  KUVA_LOCAL: 'kuvaLocal',
  CURRENCY_CLOUD: 'currencyCloud',
  MASTER_NODE: 'masterNode',
  OUTBOUND_TRANSFERS: 'outboundTransfers',
  CASHOUT: 'cashout',
  PAYMENTS: 'payments',
  TRANSACTIONS: 'transactions',
  MOBILE_TRANSFERS: 'mobileTransfers'
}

export const topUpStatuses: ObjValueWithColorType = {
  10: {
    color: 'orange',
    value: 'ORDERED',
  },
  20: {
    color: 'aqua',
    value: 'TRANSFERRED',
  },
  30: {
    color: 'green',
    value: 'COMPLETED',
  },
  40: {
    color: 'red',
    value: 'CANCELLED',
  },
  50: {
    color: 'red',
    value: 'EXPIRED',
  },
  60: {
    color: 'aqua',
    value: 'FUNDS LEARED',
  },
  70: {
    color: 'red',
    value: 'TRANSFER FAILED',
  },
  80: {
    color: 'red',
    value: 'INCORRECT PAYIN',
  },
  90: {
    color: 'red',
    value: 'ERROR NOP COMMERCE ORDER',
  },
  100: {
    color: 'aqua',
    value: 'UNDERPAID',
  },
  110: {
    color: 'aqua',
    value: 'OVERPAID',
  },
  120: {
    color: 'green',
    value: 'FUNDS RECEIVED'
  },
}

export const fundTypes: ObjValueWithColorType = {
  10: {
    color: 'aqua',
    value: 'BANK TRANSFER',
  },
  20: {
    color: 'green',
    value: 'CASH',
  },
  30: {
    color: 'aqua',
    value: 'KUVA LOCAL BANK TRANSFER',
  },
  40: {
    color: 'green',
    value: 'KUVA LOCAL CASH',
  },
  50: {
    color: 'aqua',
    value: 'KUVA DIRECT BANK TRANSFER',
  },
  60: {
    color: 'green',
    value: 'CASH ON DELIVERY',
  },
  70: {
    color: 'aqua',
    value: 'CHANGE MERCHANT',
  },
  80: {
    color: 'green',
    value: 'CREDIT VENDOR',
  },
  90: {
    color: 'aqua',
    value: 'CASHRAIL',
  },
  100: {
    color: 'green',
    value: 'KUVA WHITE LABEL',
  },
  110: {
    color: 'aqua',
    value: 'MULTI CASH',
  },
}

export const riskLevelMarkers: { [key: number]: string } = {
  10: 'green',
  20: 'orange',
  30: 'red',
  40: 'black',
}

export const mobileUserStatuses: ObjValueWithColorType = {
  10: {
    color: 'orange',
    value: 'PENDING',
  },
  20: {
    color: 'aqua',
    value: 'ACCEPTED',
  },
  30: {
    color: 'red',
    value: 'REJECTED',
  },
  40: {
    color: 'red',
    value: 'BLOCKED',
  },
  50: {
    color: 'red',
    value: 'DELETE',
  },
  60: {
    color: '',
    value: 'COUNTDOWN',
  },
  70: {
    color: 'grey',
    value: 'HOLD ON',
  },
  80: {
    color: 'grey',
    value: 'NOT VERIFIED',
  },
  90: {
    color: 'grey',
    value: 'INITIATED VERIFICATION',
  },
  100: {
    color: 'grey',
    value: 'PENDING VERIFICATION',
  },
  110: {
    color: 'grey',
    value: 'FAILED VERIFICATION',
  },
  120: {
    color: 'grey',
    value: 'FAILED VERIFICATION WITH RETRY',
  },
  130: {
    color: 'orange',
    value: 'GUEST',
  },
}

export const transactionTypes: { [key: string]: string } = {
  send: 'SEND',
  sendByAddress: 'SEND BY ADDRESS',
  sendByMobile: 'SEND BY MOBILE',
  sendByPaycode: 'SEND BY PAYCODE',
  cashout: 'CASHOUT',
  transferUsdDash: 'TRANSFER USD TO DASH',
  transferDashUsd: 'TRANSFER DASH TO USD',
  treasury_transferUsdDash: 'TRANSFER USD TO DASH',
  treasury_transferDashUsd: 'TRANSFER DASH TO USD',
  outbound: 'OUTBOUND',
  incoming: 'INCOMING',
  addFunds: 'ADD FUNDS',
  cancelCashout: 'CANCEL CASHOUT',
  treasury_fromBtc: 'FROM BTC',
  treasury_fromDash: 'FROM DASH',
  treasury_fromKuvaSale: 'FROM KUVA SALE',
  masternodeReward: 'MASTERNODE REWARD',
  mn_collateral: 'MASTERNODE COLLATERAL',
  mn_back_collateral: 'MASTERNODE BACK COLLATERAL',
  transferUsdBtc: 'TRANSFER USD TO BTC',
  transferBtcUsd: 'TRANSFER BTC TO USD',
  treasury_transferUsdBtc: 'TRANSFER USD TO BTC',
  treasury_transferBtcUsd: 'TRANSFER BTC TO USD',
  outbound_transfer: 'OUTBOUND TRANSFER',
  treasury_outbound_transfer_refund: 'TREASURY OUTBOUND TRANSFER REFUND',
  tresuary_bundle_transferDash: 'TREASURY BUNDLE TRANSFER DASH',
  tresuary_bundle_transferBtc: 'TREASURY BUNDLE TRANSFER BTC',
  tresuary_bundle_transferUsd: 'TREASURY BUNDLE TRANSFER USD',
  tresuary_bundle_transferKuva: 'TREASURY BUNDLE TRANSFER KUVA',
  tresuary_bundle_transfer_fee_refund_Usd: 'TREASURY BUNDLE TRANSFER FEE REFUND USD',
  transferUsdBtc_fee_refund: 'TRANSFER USD BTC FEE REFUND',
  transferUsdDash_fee_refund: 'TRANSFER USD DASH FEE REFUND',
  cashout_fee_refund: 'CANCEL CASHOUT FEE REFUND',
  mobile_transfer_fee_refund: 'MOBILE TRANSFER FEE REFUND',
  treasury_outbound_transfer_fee_refund: 'TREASURY OUTBOUNT TRANSFER FEE REFUND',
  treasury_inactive_to_active: 'TREASURY INACTIVE TO ACTIVE TRANSFER',
  transferBtcUsd_refund: 'TRANSFER BTC USD REFUND',
  transferDashUsd_refund: 'TRANSFER DASH USD REFUND',
  transferUsdBtc_refund: 'TRANSFER USD BTC REFUND',
  transferUsdDash_refund: 'TRANSFER USD DASH REFUND',
  VendorSettlement: 'VENDOR SETTLEMENT',
  AgentSettlement: 'AGENT SETTLEMENT',
  KuvaLocalOrderRefund: 'KUVA LOCAL ORDER REFUND',
  buyingKuva: 'BUYING KUVA',
  mobile_transfer: 'MOBILE TRANSFER',
  mobile_transfer_refund: 'MOBILE TRANSFER REFUND',
}

export const coinTypes: { [key: number]: string } = {
  10: 'DASH',
  20: 'USDK',
  30: 'KUVA COIN',
  40: 'BTC',
}

export const transferStatuses: ObjValueWithColorType = {
  0: {
    color: 'grey',
    value: 'Unknown'
  },
  10: {
    color: 'green',
    value: 'COMPLETED',
  },
  20: {
    color: 'orange',
    value: 'PENDING',
  },
  30: {
    color: 'red',
    value: 'FAILED',
  },
  40: {
    color: 'red',
    value: 'PAYOUT FAILED',
  },
  50: {
    color: 'red',
    value: 'EXCHANGE FAILED',
  },
  60: {
    color: 'orange',
    value: 'EXCHANGE PENDING',
  },
  70: {
    color: 'orange',
    value: 'BUNDLE TRANSFER PENDING',
  },
  80: {
    color: 'red',
    value: 'BUNDLE TRANSFER FAILED',
  },
  90: {
    color: 'blue',
    value: 'REFUNDED',
  },
  100: {
    color: 'orange',
    value: 'REFUND PENDING',
  },
  110: {
    color: 'red',
    value: 'ADDRESS INVALID',
  },
  120: {
    color: 'aqua',
    value: 'CONFIRMATION PENDING',
  },
  130: {
    color: 'red',
    value: 'INVALID',
  },
}
