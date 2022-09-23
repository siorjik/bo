import { createAsyncThunk } from '@reduxjs/toolkit'

import apiRequestService from '../../services/apiRequestService'
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
  async (data: UserType, { rejectWithValue }) => {
    try {
      const todo = await apiRequestService('get', 'https://jsonplaceholder.typicode.com/todos/1')
  
      if (todo) return { accessToken: 'access', refreshToken: 'refresh' }
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)
