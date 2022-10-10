import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserType, UserDataType } from '../../types/userTypes'
import { fetchUser } from '../actions/userActions'

const initialState: UserType = {
  data: {
    email: '',
    name: '',
    phoneNumber: '',
    isTwoFactorEnabled: false,
  },
  userFetchStart: false,
  userFetchFinished: false,
  error: '',
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending.type]: (state) => {
      state.userFetchStart = true
    },
    [fetchUser.fulfilled.type]: (state, action: PayloadAction<UserDataType>) => {
      state.userFetchFinished = true
      state.userFetchStart = false
      state.data = action.payload
    },
    [fetchUser.rejected.type]: (state, action: PayloadAction<{ message: string }>) => {
      state.error = action.payload.message
    },
  },
})

export default user.reducer
