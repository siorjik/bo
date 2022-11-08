import { createAsyncThunk } from '@reduxjs/toolkit'

import { FETCH_COUNTRY_LIST } from './actionTypes'

import { apiCountriesPath } from '../../utils/apiPaths'

import { CountryDataType } from '../../types/countryType'
import apiRequestServiceWithRefresh from '../../services/apiRequestServiceWithRefresh'
import { RequestErrType } from '../../types/generalTypes'

export const fetchCountryList = createAsyncThunk<CountryDataType[], undefined, { rejectValue: RequestErrType }>(
  FETCH_COUNTRY_LIST,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await apiRequestServiceWithRefresh(dispatch, 'get', apiCountriesPath)

      if (result) return result
    } catch (err) {
      return rejectWithValue(err as RequestErrType)
    }
  }
)
