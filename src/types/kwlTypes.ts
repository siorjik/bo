export type KWLSiteDataType = {
  id: number,
  extId: string,
  hostUrl: string,
  logoUrl: string,
  isDefault: boolean,
  confirmationEmailText: string,
  paymentCompleteSmsText: string,
  redeemCodeText: string,
  senderName: string,
  senderEmail: string,
  agentGroupId: number,
  sourceCountryIds: number[],
  receiveCountryIds: number[],
}

export type KWLUserDataType = {
  id: number,
  createdDate: string,
  name: string,
  email: string,
  phoneNumber: string,
  kuvaWhiteLabelId: number,
  kwlHostUrl: string,
}

export type KWLTypes = {
  site: {
    list: KWLSiteDataType[],
    listFetchStart: boolean,
    listFetchFinished: boolean,
  },
  user: {
    list: KWLUserDataType[],
    listFetchStart: boolean,
    listFetchFinished: boolean,
  },
  data: KWLSiteDataType,
  dataFetchStart: boolean,
  dataFetchFinished: boolean,
  setCountryStart: boolean,
  setCountryFinished: boolean,
  deleteCountryStart: boolean,
  deleteCountryFinished: boolean,
  error: string,
}
