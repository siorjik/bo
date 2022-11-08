import { CountryDataType } from "../types/countryType"

export default (countryIds: number[], countryList: CountryDataType[]) =>
  countryIds.map(countryId => countryList.filter(country => country.name && country.id === countryId)[0].name).join(', ')