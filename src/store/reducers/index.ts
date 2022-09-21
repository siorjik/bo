import { combineReducers } from '@reduxjs/toolkit'

import authReducer from './authReducer'
import displayReducer from './displayReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  display: displayReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
