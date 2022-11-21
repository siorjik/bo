import { createSlice } from '@reduxjs/toolkit'

import { TransactionType } from '../../types/transactionTypes'
import { fetchTransactionAllList } from '../actions/transactionActions'
import { getList } from './initialStates'

const initialState: TransactionType = {
  all: { ...getList() },
  error: '',
}

const transaction = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionAllList.pending, (state) => {
        state.all.listFetchStart = true
      })
      .addCase(fetchTransactionAllList.fulfilled, (state, action) => {
        state.all.listFetchFinished = true
        state.all.listFetchStart = false
        state.all.list = action.payload
      })
      .addCase(fetchTransactionAllList.rejected, (state, action) => {
        state.error = action.payload!.message
      })
  },
})

export default transaction.reducer
