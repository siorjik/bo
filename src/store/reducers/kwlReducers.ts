import { createSlice } from '@reduxjs/toolkit'

import { KWLTypes } from '../../types/kwlTypes'
import { fetchKWLSiteList, fetchKWLUserList } from '../actions/kwlActions'

const initialState: KWLTypes = {
  site: {
    list: [],
    listFetchStart: false,
    listFetchFinished: false,
  },
  user: {
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

      .addCase(fetchKWLUserList.pending, (state) => {
        state.user.listFetchStart = true
      })
      .addCase(fetchKWLUserList.fulfilled, (state, action) => {
        state.user.listFetchFinished = true
        state.user.listFetchStart = false
        state.user.list = action.payload
      })
      .addCase(fetchKWLUserList.rejected, (state, action) => {
        state.error = action.payload!.message
      })
  },
})

export default kwl.reducer
