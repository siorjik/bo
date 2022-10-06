import { createAsyncThunk } from '@reduxjs/toolkit'

import apiRequestService from '../../services/apiRequestService'
import setApiHeaders from '../../helpers/setApiHeaders'
import { UserDataType } from '../../types/userTypes'
import { TOKENS_FETCHING } from './actionTypes'

// tokens fetching
export const fetchTokens = createAsyncThunk(
  TOKENS_FETCHING,
  async (data: UserDataType | null, { rejectWithValue }) => {
    try {
      if (!data) {
        const tokens = window.localStorage.getItem('tokens') && JSON.parse(window.localStorage.getItem('tokens')!)

        setApiHeaders(tokens.accessToken)

        if (tokens) return { ...tokens }
      } else {
        const todo = await apiRequestService('get', 'https://jsonplaceholder.typicode.com/todos/1')
    
        if (todo) {
          window.localStorage.setItem('tokens', JSON.stringify({ accessToken: 'access', refreshToken: 'refresh' }))

          setApiHeaders('accessToken')
  
          return { accessToken: 'access', refreshToken: 'refresh' }
        }
      }
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)
