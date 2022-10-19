export type KWLSiteData = {
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
}

export type KWLUserData = {
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
    list: KWLSiteData[],
    listFetchStart: boolean,
    listFetchFinished: boolean,
  },
  user: {
    list: KWLUserData[],
    listFetchStart: boolean,
    listFetchFinished: boolean,
  },
  error: string,
}
