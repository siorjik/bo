import { createAsyncThunk } from '@reduxjs/toolkit'

import apiRequestService from '../../services/apiRequestService'
import { PERMISSION_LIST_FETCHING, USER_PERMISSION_LIST_FETCHING } from './actionTypes'

import { permissionList } from '../../mocks/roles'

export const fetchPermissiionList = createAsyncThunk(
  PERMISSION_LIST_FETCHING,
  async (_, { rejectWithValue }) => {
    try {
      const todo = await apiRequestService('get', 'https://jsonplaceholder.typicode.com/todos/1')
  
      if (todo) return permissionList
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const fetchUserPermissiionList = createAsyncThunk(
  USER_PERMISSION_LIST_FETCHING,
  async (_, { rejectWithValue }) => {
    try {
      const todo = await apiRequestService('get', 'https://jsonplaceholder.typicode.com/todos/1')
  
      if (todo) return [{ key: 'BackOffice'/*'SuperUser'*/ }]
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)
