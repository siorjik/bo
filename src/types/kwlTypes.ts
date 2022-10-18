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

export type KWLTypes = {
  site: {
    list: KWLSiteData[],
    listFetchStart: boolean,
    listFetchFinished: boolean,
  },
  error: string,
}
