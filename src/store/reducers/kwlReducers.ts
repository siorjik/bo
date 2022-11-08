import { createSlice } from '@reduxjs/toolkit'

import { KWLTypes } from '../../types/kwlTypes'
import { deleteKWLCountry, fetchKWLDataById, fetchKWLSiteList, fetchKWLUserList, setKWLCountry } from '../actions/kwlActions'

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
  data: {
    sourceCountryIds: [],
    receiveCountryIds: [],
    id: 0,
    extId: '',
    hostUrl: '',
    logoUrl: '',
    isDefault: false,
    confirmationEmailText: '',
    paymentCompleteSmsText: '',
    redeemCodeText: '',
    senderName: '',
    senderEmail: '',
    agentGroupId: 0,
  },
  dataFetchStart: false,
  dataFetchFinished: false,
  setCountryStart: false,
  setCountryFinished: false,
  deleteCountryStart: false,
  deleteCountryFinished: false,
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

      .addCase(fetchKWLDataById.pending, (state) => {
        state.dataFetchStart = true
      })
      .addCase(fetchKWLDataById.fulfilled, (state, action) => {
        state.dataFetchFinished = true
        state.dataFetchStart = false
        state.data = action.payload
      })
      .addCase(fetchKWLDataById.rejected, (state, action) => {
        state.error = action.payload!.message
      })

      .addCase(setKWLCountry().pending, (state) => {
        state.setCountryStart = true
      })
      .addCase(setKWLCountry().fulfilled, (state) => {
        state.setCountryFinished = true
        state.setCountryStart = false
      })
      .addCase(setKWLCountry().rejected, (state, action) => {
        state.error = action.payload!.message
      })

      .addCase(deleteKWLCountry().pending, (state) => {
        state.deleteCountryStart = true
      })
      .addCase(deleteKWLCountry().fulfilled, (state) => {
        state.deleteCountryFinished = true
        state.deleteCountryStart = false
      })
      .addCase(deleteKWLCountry().rejected, (state, action) => {
        state.error = action.payload!.message
      })
  },
})

export default kwl.reducer
