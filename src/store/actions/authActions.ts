import { createAsyncThunk } from '@reduxjs/toolkit'

import apiRequestService from '../../services/apiRequestService'
import setApiHeaders from '../../helpers/setApiHeaders'
import { TOKENS_FETCHING } from './actionTypes'

import { apiLoginPath } from '../../utils/apiPaths'

// tokens fetching
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
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)
