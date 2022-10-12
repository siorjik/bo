import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthType } from '../../types/authTypes'
import {
  fetchTokens,
  fetchAuthenticator,
  confirmAuthenticator,
  disableAuthenticator,
  resetError,
} from '../actions/authActions'

const initialState: AuthType = {
  tokens: {
    accessToken: '',
    refreshToken: '',
  },
  tokensFetchStart: false,
  tokensFetchFinished: false,
  authenticator: {
    sharedKey: '',
    authenticatorUri: '',
  },
  authenticatorFetchStart: false,
  authenticatorFetchFinished: false,
  authenticatorConfirmStart: false,
  authenticatorConfirmFinished: false,
  authenticatorDisableStart: false,
  authenticatorDisableFinished: false,
  error: '',
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTokens.pending.type]: (state) => {
      state.tokensFetchStart = true
      state.error = ''
    },
    [fetchTokens.fulfilled.type]: (state, action: PayloadAction<{ accessToken: string, refreshToken: string }>) => {
      state.tokensFetchFinished = true
      state.tokensFetchStart = false
      state.tokens = action.payload
    },
    [fetchTokens.rejected.type]: (state, action: PayloadAction<string>) => {
      state.tokensFetchStart = false
      state.error = action.payload
    },

    [fetchAuthenticator.pending.type]: (state) => {
      state.authenticatorFetchStart = true
      state.error = ''
    },
    [fetchAuthenticator.fulfilled.type]: (state, action: PayloadAction<{ sharedKey: string, authenticatorUri: string }>) => {
      state.authenticatorFetchFinished = true
      state.authenticatorFetchStart = false
      state.authenticator = action.payload
    },
    [fetchAuthenticator.rejected.type]: (state, action: PayloadAction<string>) => {
      state.authenticatorFetchStart = true
      state.error = action.payload
    },

    [confirmAuthenticator.pending.type]: (state) => {
      state.authenticatorConfirmStart = true
      state.error = ''
    },
    [confirmAuthenticator.fulfilled.type]: (state) => {
      state.authenticatorConfirmFinished = true
      state.authenticatorConfirmStart = false
    },
    [confirmAuthenticator.rejected.type]: (state, action: PayloadAction<string>) => {
      state.authenticatorConfirmStart = false
      state.error = action.payload
    },

    [disableAuthenticator.pending.type]: (state) => {
      state.authenticatorDisableStart = true
      state.error = ''
    },
    [disableAuthenticator.fulfilled.type]: (state) => {
      state.authenticatorDisableFinished = true
      state.authenticatorDisableStart = false
    },
    [disableAuthenticator.rejected.type]: (state, action: PayloadAction<string>) => {
      state.authenticatorDisableStart = false
      state.error = action.payload
    },

    [resetError.type]: (state) => {
      state.error = ''
    },
  },
})

export default auth.reducer
