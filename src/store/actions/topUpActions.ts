import { createAsyncThunk } from "@reduxjs/toolkit"

import { FETCH_TOP_UP_CASHRAIL_LIST, FETCH_TOP_UP_KWL_LIST, FETCH_TOP_UP_USDK_LIST } from "./actionTypes"

import apiRequestServiceWithRefresh from "../../services/apiRequestServiceWithRefresh"
import { apiTopUpCashrailPath, apiTopUpKWLPath, apiTopUpUsdkPath } from '../../utils/apiPaths'
import { TopUpCashrailDataType, TopUpKWLDataType, TopUpUsdkDataType } from "../../types/topUpTypes"
import { RequestErrType, ResultListType } from "../../types/generalTypes"

export const fetchTopUpUsdkList = createAsyncThunk<ResultListType<TopUpUsdkDataType>, string, { rejectValue: RequestErrType }>(
  FETCH_TOP_UP_USDK_LIST,
  async (queryParams: string, { rejectWithValue, dispatch }) => {
    try {
      const result = await apiRequestServiceWithRefresh(dispatch, 'get', `${apiTopUpUsdkPath}?${queryParams}`)

      if (result) return result
    } catch (err) {
      return rejectWithValue(err as RequestErrType)
    }
  }
)

export const fetchTopUpCashrailList =
  createAsyncThunk<ResultListType<TopUpCashrailDataType>, string, { rejectValue: RequestErrType }>(
    FETCH_TOP_UP_CASHRAIL_LIST,
    async (queryParams: string, { rejectWithValue, dispatch }) => {
      try {
        const result = await apiRequestServiceWithRefresh(dispatch, 'get', `${apiTopUpCashrailPath}?${queryParams}`)

        if (result) return result
      } catch (err) {
        return rejectWithValue(err as RequestErrType)
      }
    }
  )

  export const fetchTopUpKWLList = createAsyncThunk<ResultListType<TopUpKWLDataType>, string, { rejectValue: RequestErrType }>(
    FETCH_TOP_UP_KWL_LIST,
    async (queryParams: string, { rejectWithValue, dispatch }) => {
      try {
        const result = await apiRequestServiceWithRefresh(dispatch, 'get', `${apiTopUpKWLPath}?${queryParams}`)
  
        if (result) return result
      } catch (err) {
        return rejectWithValue(err as RequestErrType)
      }
    }
  )
