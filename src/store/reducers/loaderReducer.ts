import { createSlice } from '@reduxjs/toolkit'

import { setStartLoader, setStopLoader } from '../actions/loaderActions'

const initialState: { isShowLoader: boolean } = {
  isShowLoader: false,
}

const loader = createSlice({
  name: 'loader',
  initialState,
  reducers: {},
  extraReducers: {
    [setStartLoader.type]: (state) => {
      state.isShowLoader = true
    },
    [setStopLoader.type]: (state) => {
      state.isShowLoader = false
    },
  },
})

export default loader.reducer
