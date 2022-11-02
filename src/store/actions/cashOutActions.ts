import { createAsyncThunk } from "@reduxjs/toolkit"

import { FETCH_CASH_OUT_PENDING_LIST } from "./actionTypes"

import apiRequestServiceWithRefresh from "../../services/apiRequestServiceWithRefresh"
import { apiCashOutPendingPath } from '../../utils/apiPaths'
import { CashOutDataType } from "../../types/cashOutTypes"
import { RequestErrType, ResultListType } from "../../types/generalTypes"

export const fetchCashOutPendingList = createAsyncThunk<ResultListType<CashOutDataType>, string, { rejectValue: RequestErrType }>(
  FETCH_CASH_OUT_PENDING_LIST,
  async (queryParams: string, { rejectWithValue, dispatch }) => {
    try {
      const result = await apiRequestServiceWithRefresh(dispatch, 'get', `${apiCashOutPendingPath}?${queryParams}`)
  
      if (result) return result
    } catch (err) {
      return rejectWithValue(err as RequestErrType)
    }
  }
)