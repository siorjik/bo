import { combineReducers } from '@reduxjs/toolkit'

import auth from './authReducer'
import display from './displayReducer'
import permission from './permissionReducer'
import loader from './loaderReducer'

const rootReducer = combineReducers({
  auth,
  display,
  permission,
  loader,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
