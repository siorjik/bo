import { createSlice } from '@reduxjs/toolkit'

import { KWLTypes } from '../../types/kwlTypes'
import { fetchKWLSiteList } from '../actions/kwlActions'

const initialState: KWLTypes = {
  site: {
    list: [],
    listFetchStart: false,
    listFetchFinished: false,
  },
  error: '',
}

const kwl = createSlice({
  name: 'kwl',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchKWLSiteList.pending, (state) => {
        state.site.listFetchStart = true
      })
      .addCase(fetchKWLSiteList.fulfilled, (state, action) => {
        state.site.listFetchFinished = true
        state.site.listFetchStart = false
        state.site.list = action.payload
      })
      .addCase(fetchKWLSiteList.rejected, (state, action) => {
        state.error = action.payload!.message
      })
  },
})

export default kwl.reducer
