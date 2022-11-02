import { createAsyncThunk } from "@reduxjs/toolkit"

import { FETCH_TOP_UP_USDK_LIST } from "./actionTypes"

import apiRequestServiceWithRefresh from "../../services/apiRequestServiceWithRefresh"
import { apiTopUpUsdkPath } from '../../utils/apiPaths'
import { TopUpUsdkDataType } from "../../types/topUpTypes"
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