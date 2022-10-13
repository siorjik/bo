import { createAsyncThunk } from '@reduxjs/toolkit'

import { USER_FETCHING } from './actionTypes'

import { apiPath } from '../../utils/apiPaths'
import apiRequestServiceWithRefresh from '../../services/apiRequestServiceWithRefresh'

export const fetchUser = createAsyncThunk(
  USER_FETCHING,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await apiRequestServiceWithRefresh(dispatch, 'get', apiPath!)
  
      if (result) return result
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)
