import { createSlice } from '@reduxjs/toolkit'

import { TopUpType } from '../../types/topUpTypes'
import { fetchTopUpCashrailList, fetchTopUpKWLList, fetchTopUpUsdkList  } from '../actions/topUpActions'
import { getList } from './initialStates'

const initialState: TopUpType = {
  usdk: { ...getList() },
  cashrail: { ...getList() },
  kwl: { ...getList() },
  error: '',
}

const topUp = createSlice({
  name: 'topUp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopUpUsdkList.pending, (state) => {
        state.usdk.listFetchStart = true
      })
      .addCase(fetchTopUpUsdkList.fulfilled, (state, action) => {
        state.usdk.listFetchFinished = true
        state.usdk.listFetchStart = false
        state.usdk.list = action.payload
      })
      .addCase(fetchTopUpUsdkList.rejected, (state, action) => {
        state.error = action.payload!.message
      })

      .addCase(fetchTopUpCashrailList.pending, (state) => {
        state.cashrail.listFetchStart = true
      })
      .addCase(fetchTopUpCashrailList.fulfilled, (state, action) => {
        state.cashrail.listFetchFinished = true
        state.cashrail.listFetchStart = false
        state.cashrail.list = action.payload
      })
      .addCase(fetchTopUpCashrailList.rejected, (state, action) => {
        state.error = action.payload!.message
      })

      .addCase(fetchTopUpKWLList.pending, (state) => {
        state.kwl.listFetchStart = true
      })
      .addCase(fetchTopUpKWLList.fulfilled, (state, action) => {
        state.kwl.listFetchFinished = true
        state.kwl.listFetchStart = false
        state.kwl.list = action.payload
      })
      .addCase(fetchTopUpKWLList.rejected, (state, action) => {
        state.error = action.payload!.message
      })
  },
})

export default topUp.reducer
