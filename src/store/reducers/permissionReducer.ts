import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PermissionDataType, PermissionType } from '../../types/permissionTypes'
import { fetchPermissiionList, fetchUserPermissiionList } from '../actions/permissionActions'

const initialState: PermissionType = {
  list: [],
  userPermissionList: [],
  userPermissionListFetchStart: false,
  userPermissionListFetchFinished: false,
  listFetchStart: false,
  listFetchFinished: false,
  error: '',
}

const permission = createSlice({
  name: 'permission',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPermissiionList.pending.type]: (state) => {
      state.listFetchStart = true
    },
    [fetchPermissiionList.fulfilled.type]: (state, action: PayloadAction<PermissionDataType[]>) => {
      state.listFetchFinished = true
      state.listFetchStart = false
      state.list = action.payload
    },
    [fetchPermissiionList.rejected.type]: (state, action: PayloadAction<{ message: string }>) => {
      state.error = action.payload.message
    },

    [fetchUserPermissiionList.pending.type]: (state) => {
      state.userPermissionListFetchStart = true
    },
    [fetchUserPermissiionList.fulfilled.type]: (state, action: PayloadAction<PermissionDataType[]>) => {
      state.userPermissionListFetchFinished = true
      state.userPermissionListFetchStart = false
      state.userPermissionList = action.payload
    },
    [fetchUserPermissiionList.rejected.type]: (state, action: PayloadAction<{ message: string }>) => {
      state.error = action.payload.message
    },
  },
})

export default permission.reducer
