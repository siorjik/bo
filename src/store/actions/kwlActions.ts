import { createAsyncThunk } from '@reduxjs/toolkit'

import {
  DELETE_KWL_RECEIVE_COUNTRY,
  DELETE_KWL_SOURCE_COUNTRY,
  FETCH_KWL_BY_ID, FETCH_KWL_SITE_LIST,
  FETCH_KWL_USER_LIST,
  SET_KWL_RECEIVE_COUNTRY,
  SET_KWL_SOURCE_COUNTRY
} from './actionTypes'

import { apiKWLSitesPath, apiKWLUsersPath, getApiKWLByIdPath } from '../../utils/apiPaths'

import apiRequestServiceWithRefresh from '../../services/apiRequestServiceWithRefresh'
import { KWLSiteDataType, KWLUserDataType } from '../../types/kwlTypes'

type ErrType = { message: string }

export const fetchKWLSiteList = createAsyncThunk<KWLSiteDataType[], undefined, { rejectValue: ErrType }>(
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

export const fetchKWLUserList = createAsyncThunk<KWLUserDataType[], undefined, { rejectValue: ErrType }>(
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

export const fetchKWLDataById = createAsyncThunk<KWLSiteDataType, number, { rejectValue: ErrType }>(
  FETCH_KWL_BY_ID,
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const result = await apiRequestServiceWithRefresh(dispatch, 'get', getApiKWLByIdPath(id))

      if (result) return result
    } catch (err) {
      return rejectWithValue(err as ErrType)
    }
  }
)

export const setKWLCountry = (action: string = SET_KWL_RECEIVE_COUNTRY || SET_KWL_SOURCE_COUNTRY) =>
  createAsyncThunk<boolean, string, { rejectValue: ErrType }>(
    action,
    async (apiPath, { rejectWithValue, dispatch }) => {
      try {
        await apiRequestServiceWithRefresh(dispatch, 'post', apiPath)

        return true
      } catch (err) {
        return rejectWithValue(err as ErrType)
      }
    }
  )

export const deleteKWLCountry = (action: string = DELETE_KWL_RECEIVE_COUNTRY || DELETE_KWL_SOURCE_COUNTRY) =>
  createAsyncThunk<boolean, string, { rejectValue: ErrType }>(
    action,
    async (apiPath, { rejectWithValue, dispatch }) => {
      try {
        await apiRequestServiceWithRefresh(dispatch, 'delete', apiPath)

        return true
      } catch (err) {
        return rejectWithValue(err as ErrType)
      }
    }
  )
