import { createSlice } from '@reduxjs/toolkit'

import { CountryType } from '../../types/countryTypes'
import { fetchCountryList } from '../actions/countryActions'

const initialState: CountryType = {
  list: [],
  listFetchStart: false,
  listFetchFinished: false,
  error: '',
}

const country = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryList.pending, (state) => {
        state.listFetchStart = true
      })
      .addCase(fetchCountryList.fulfilled, (state, action) => {
        state.listFetchFinished = true
        state.listFetchStart = false
        state.list = action.payload
      })
      .addCase(fetchCountryList.rejected, (state, action) => {
        state.error = action.payload!.message
      })
  },
})

export default country.reducer
