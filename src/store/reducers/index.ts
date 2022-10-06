import { combineReducers } from '@reduxjs/toolkit'

import auth from './authReducer'
import display from './displayReducer'
import permission from './permissionReducer'
import loader from './loaderReducer'
import user from './userReducer'

const rootReducer = combineReducers({
  auth,
  user,
  display,
  permission,
  loader,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
