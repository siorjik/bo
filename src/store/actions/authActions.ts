import { createAsyncThunk, createAction } from '@reduxjs/toolkit'

import apiRequestService from '../../services/apiRequestService'
import setApiHeaders from '../../helpers/setApiHeaders'
import {
  TOKENS_FETCHING,
  AUTHENTICATOR_FETCHING,
  AUTHENTICATOR_CONFIRM,
  AUTHENTICATOR_DISABLE,
  RESET_ERROR
} from './actionTypes'

import {
  apiAuthenticatorConfirmPath,
  apiAuthenticatorDisablePath,
  apiAuthenticatorPath,
  apiLoginPath
} from '../../utils/apiPaths'

type ErrType = {
  response: { data: { message: string } }
}

export const resetError = createAction(RESET_ERROR)

export const fetchTokens = createAsyncThunk(
  TOKENS_FETCHING,
  async (data: { email: string, password: string } | null, { rejectWithValue }) => {
    try {
      if (!data) {
        const tokens = window.localStorage.getItem('tokens') && JSON.parse(window.localStorage.getItem('tokens')!)

        setApiHeaders(tokens.accessToken)

        if (tokens) return { ...tokens }
      } else {
        const result = await apiRequestService('post', apiLoginPath, { ...data, deviceId: false })
    
        if (result) {
          const { accessToken, refreshToken } = result

          window.localStorage.setItem('tokens', JSON.stringify({ accessToken, refreshToken }))

          setApiHeaders(accessToken)
  
          return { accessToken, refreshToken }
        }
      }
    } catch (error) {
      const err = error as ErrType

      return rejectWithValue(err.response.data.message)
    }
  }
)

export const fetchAuthenticator = createAsyncThunk(
  AUTHENTICATOR_FETCHING,
  async (_, { rejectWithValue }) => {
    try {
      const result = await apiRequestService('get', apiAuthenticatorPath)

      if (result) return result
    } catch (error) {
      const err = error as ErrType

      return rejectWithValue(err.response.data.message)
    }
  }
)

export const confirmAuthenticator = createAsyncThunk(
  AUTHENTICATOR_CONFIRM,
  async (data: { code: string }, { rejectWithValue }) => {
    try {
      const result = await apiRequestService('post', apiAuthenticatorConfirmPath, data)

      if (result) return result
    } catch (error) {
      const err = error as ErrType

      return rejectWithValue(err.response.data.message)
    }
  }
)

export const disableAuthenticator = createAsyncThunk(
  AUTHENTICATOR_DISABLE,
  async (_, { rejectWithValue }) => {
    try {
      const result = await apiRequestService('post', apiAuthenticatorDisablePath)

      if (result) return result
    } catch (error) {
      const err = error as ErrType

      return rejectWithValue(err.response.data.message)
    }
  }
)
