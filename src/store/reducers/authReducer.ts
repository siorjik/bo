import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthType, UserType } from '../../types/authTypes'
import { fetchUser } from '../actions/authActions'

const initialState: AuthType = {
  user: {
    login: '',
    pass: '',
  },
  userFetchStart: false,
  userFetchFinished: false,
  status: '',
  error: '',
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending.type]: (state) => {
      state.userFetchStart = true
    },
    [fetchUser.fulfilled.type]: (state, action: PayloadAction<UserType>) => {
      state.userFetchFinished = true
      state.userFetchStart = false
      state.user = action.payload
    },
    [fetchUser.rejected.type]: (state, action: PayloadAction<{ message: string }>) => {
      state.error = action.payload.message
    },
  },
})

export default auth.reducer
