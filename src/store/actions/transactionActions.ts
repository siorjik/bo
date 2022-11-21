import { createAsyncThunk } from "@reduxjs/toolkit"

import { FETCH_TRANSACTION_ALL_LIST } from "./actionTypes"

import { ResultListType, RequestErrType } from "../../types/generalTypes"
import { apiTransactionsAllPath } from "../../utils/apiPaths"
import apiRequestServiceWithRefresh from "../../services/apiRequestServiceWithRefresh"
import { TransactionDataType } from "../../types/transactionTypes"

export const fetchTransactionAllList =
  createAsyncThunk<ResultListType<TransactionDataType>, string, { rejectValue: RequestErrType }>(
    FETCH_TRANSACTION_ALL_LIST,
    async (queryParams: string, { rejectWithValue, dispatch }) => {
      try {
        const result = await apiRequestServiceWithRefresh(dispatch, 'get', `${apiTransactionsAllPath}?${queryParams}`)

        if (result) return result
      } catch (err) {
        return rejectWithValue(err as RequestErrType)
      }
    }
  )
