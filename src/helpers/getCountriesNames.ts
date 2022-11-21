import { CountryDataType } from "../types/countryTypes"

export default (countryIds: number[], countryList: CountryDataType[]) =>
  countryIds.map(countryId => countryList.filter(country => country.name && country.id === countryId)[0].name).join(', ')