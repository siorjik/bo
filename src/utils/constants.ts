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

export const fundsType: ObjValueWithColorType = {
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

export const riskLevelMarker: { [key: number]: string } = {
  10: 'green',
  20: 'orange',
  30: 'red',
  40: 'black',
}
