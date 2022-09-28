import { createAsyncThunk } from '@reduxjs/toolkit'

import apiRequestService from '../../services/apiRequestService'
import setApiHeaders from '../../helpers/setApiHeaders'
import { UserType } from '../../types/authTypes'
import { USER_FETCHING, TOKENS_FETCHING } from './actionTypes'

// user fetching
export const fetchUser = createAsyncThunk(
  USER_FETCHING,
  async (_, { rejectWithValue }) => {
    try {
      const todo = await apiRequestService('get', 'https://jsonplaceholder.typicode.com/todos/1')
  
      if (todo) return { login: todo.title, pass: todo.completed }
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

// tokens fetching
export const fetchTokens = createAsyncThunk(
  TOKENS_FETCHING,
  async (data: UserType | null, { rejectWithValue }) => {
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
