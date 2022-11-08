export type CountryDataType = {
  id: number,
  name: string,
  phoneCode: string,
  available: boolean,
  klAvailable: boolean,
  kwlAvailable: boolean,
  klShopAvailable: boolean,
  klMailOutAvailable: boolean,
  mobileTransferAvailable: boolean,
  defaultCurrency: string,
  isO2Code: string,
  iso3Code: string,
  currencyCode: string,
  mccMnc: string,
  bankDetails: [],
  paymentOptions: [],
}

export type CountryType = {
  list: CountryDataType[],
  listFetchStart: boolean,
  listFetchFinished: boolean,
  error: string,
}
