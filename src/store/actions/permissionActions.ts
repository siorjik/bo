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
  
      if (todo) return [
        { key: 'SuperUser' },
        { key: 'Bug_Reports_Access' },
        { key: 'Agents_Access' },
        { key: 'Users_Access' },
        { key: 'Top_Up_Access' },
        { key: 'Contacts_Access' },
        { key: 'Charity_Manager' },
        { key: 'KuvaLocalAdmin' },
        { key: 'Credit_Vendor' },
        { key: 'Promo_Code_Manager' },
        { key: 'Credit_Wallet_Reserve_Treasury_Reconciliation' },
      ]
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)
