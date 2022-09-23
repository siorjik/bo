import { combineReducers } from '@reduxjs/toolkit'

import auth from './authReducer'
import display from './displayReducer'
import permission from './permissionReducer'

const rootReducer = combineReducers({
  auth,
  display,
  permission,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
