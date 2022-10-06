import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthType } from '../../types/authTypes'
import { fetchTokens } from '../actions/authActions'

const initialState: AuthType = {
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
