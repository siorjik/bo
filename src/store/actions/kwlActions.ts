import { createAsyncThunk } from '@reduxjs/toolkit'

import { FETCH_KWL_SITE_LIST, FETCH_KWL_USER_LIST } from './actionTypes'

import { apiKWLSitesPath, apiKWLUsersPath } from '../../utils/apiPaths'

import apiRequestServiceWithRefresh from '../../services/apiRequestServiceWithRefresh'
import { KWLSiteData, KWLUserData } from '../../types/kwlTypes'

type ErrType = { message: string }

export const fetchKWLSiteList = createAsyncThunk<KWLSiteData[], undefined, { rejectValue: ErrType }>(
  FETCH_KWL_SITE_LIST,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await apiRequestServiceWithRefresh(dispatch, 'get', apiKWLSitesPath)
  
      if (result) return result
    } catch (err) {
      return rejectWithValue(err as ErrType)
    }
  }
)

export const fetchKWLUserList = createAsyncThunk<KWLUserData[], undefined, { rejectValue: ErrType }>(
  FETCH_KWL_USER_LIST,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await apiRequestServiceWithRefresh(dispatch, 'get', apiKWLUsersPath)
  
      if (result) return result
    } catch (err) {
      return rejectWithValue(err as ErrType)
    }
  }
)
