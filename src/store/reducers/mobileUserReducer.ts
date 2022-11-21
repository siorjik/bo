import { createSlice } from '@reduxjs/toolkit'

import { MobileUserType } from '../../types/mobileUserTypes'
import { fetchMobileUserList } from '../actions/mobileUserActions'
import { getList } from './initialStates'

const initialState: MobileUserType = {
  ...getList(),
  error: '',
}

const mobileUser = createSlice({
  name: 'mobileUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMobileUserList.pending, (state) => {
        state.listFetchStart = true
      })
      .addCase(fetchMobileUserList.fulfilled, (state, action) => {
        state.listFetchFinished = true
        state.listFetchStart = false
        state.list = action.payload
      })
      .addCase(fetchMobileUserList.rejected, (state, action) => {
        state.error = action.payload!.message
      })
  },
})

export default mobileUser.reducer
