import { createAsyncThunk } from "@reduxjs/toolkit"

import { FETCH_CASH_OUT_PENDING_LIST } from "./actionTypes"

import apiRequestServiceWithRefresh from "../../services/apiRequestServiceWithRefresh"
import { apiCashOutPendingPath } from '../../utils/apiPaths'
import { CashOutDataType } from "../../types/cashOutTypes"

type ErrType = { message: string }
type  ResultType = {
  items: CashOutDataType[],
  count: number,
  pageNumber: number,
}

export const fetchCashOutPendingList = createAsyncThunk<ResultType, string, { rejectValue: ErrType }>(
  FETCH_CASH_OUT_PENDING_LIST,
  async (queryParams: string, { rejectWithValue, dispatch }) => {
    try {
      const result = await apiRequestServiceWithRefresh(dispatch, 'get', `${apiCashOutPendingPath}?${queryParams}`)
  
      if (result) return result
    } catch (err) {
      return rejectWithValue(err as ErrType)
    }
  }
)