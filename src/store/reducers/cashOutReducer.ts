import { createSlice } from '@reduxjs/toolkit'

import { CashOutType } from '../../types/cashOutTypes'
import { fetchCashOutPendingList  } from '../actions/cashOutActions'

const initialState: CashOutType = {
  cashOutPending: {
    list: {
      items: [],
      pageNumber: 0,
      count: 0,
    },
    listFetchStart: false,
    listFetchFinished: false,
  },
  error: '',
}

const cashOut = createSlice({
  name: 'cashOut',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCashOutPendingList.pending, (state) => {
        state.cashOutPending.listFetchStart = true
      })
      .addCase(fetchCashOutPendingList.fulfilled, (state, action) => {
        state.cashOutPending.listFetchFinished = true
        state.cashOutPending.listFetchStart = false
        state.cashOutPending.list = action.payload
      })
      .addCase(fetchCashOutPendingList.rejected, (state, action) => {
        state.error = action.payload!.message
      })
  },
})

export default cashOut.reducer
