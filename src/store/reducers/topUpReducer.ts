import { createSlice } from '@reduxjs/toolkit'

import { TopUpType } from '../../types/topUpTypes'
import { fetchTopUpUsdkList  } from '../actions/topUpActions'
import { getList } from './initialStates'

const initialState: TopUpType = {
  usdk: { ...getList() },
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
  },
})

export default topUp.reducer
