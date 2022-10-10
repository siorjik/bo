import { createAsyncThunk } from '@reduxjs/toolkit'

import apiRequestService from '../../services/apiRequestService'
import { USER_FETCHING } from './actionTypes'

import { apiPath } from '../../utils/apiPaths'

// user fetching
export const fetchUser = createAsyncThunk(
  USER_FETCHING,
  async (_, { rejectWithValue }) => {
    try {
      const result = await apiRequestService('get', apiPath!)
  
      if (result) return result
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)
