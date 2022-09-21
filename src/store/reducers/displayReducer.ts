import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DisplayType } from '../../types/displayTypes'
import { setDisplayData } from '../actions/displayActions'

const initialState: DisplayType = {
  width: 0,
  isMobileView: false
}

const display = createSlice({
  name: 'display',
  initialState,
  reducers: {},
  extraReducers: {
    [setDisplayData.type]: (state, action: PayloadAction<DisplayType>) => {
      state.width = action.payload.width
      state.isMobileView = action.payload.isMobileView
    },
  },
})

export default display.reducer
