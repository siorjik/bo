import { createAsyncThunk } from "@reduxjs/toolkit"

import { FETCH_MOBILE_USER_LIST } from "./actionTypes"

import { ResultListType, RequestErrType } from "../../types/generalTypes"
import { MobileUserDataType } from "../../types/mobileUserTypes"
import { apiMobileUsersPath } from "../../utils/apiPaths"
import apiRequestServiceWithRefresh from "../../services/apiRequestServiceWithRefresh"

export const fetchMobileUserList = createAsyncThunk<ResultListType<MobileUserDataType>, string, { rejectValue: RequestErrType }>(
  FETCH_MOBILE_USER_LIST,
  async (queryParams: string, { rejectWithValue, dispatch }) => {
    try {
      const result = await apiRequestServiceWithRefresh(dispatch, 'get', `${apiMobileUsersPath}?${queryParams}`)

      if (result) return result
    } catch (err) {
      return rejectWithValue(err as RequestErrType)
    }
  }
)
