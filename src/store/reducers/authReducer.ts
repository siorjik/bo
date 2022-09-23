import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthType, UserType } from '../../types/authTypes'
import { fetchUser, fetchTokens } from '../actions/authActions'

const initialState: AuthType = {
  user: {
    login: '',
    pass: '',
  },
  userFetchStart: false,
  userFetchFinished: false,
  error: '',
  tokens: {
    accessToken: '',
    refreshToken: '',
  },
  tokensFetchStart: false,
  tokensFetchFinished: false,
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

    [fetchTokens.pending.type]: (state) => {
      state.tokensFetchStart = true
    },
    [fetchTokens.fulfilled.type]: (state, action: PayloadAction<{ accessToken: string, refreshToken: string }>) => {
      state.tokensFetchFinished = true
      state.tokensFetchStart = false
      state.tokens = action.payload
    },
    [fetchTokens.rejected.type]: (state, action: PayloadAction<{ message: string }>) => {
      state.error = action.payload.message
    },
  },
})

export default auth.reducer
