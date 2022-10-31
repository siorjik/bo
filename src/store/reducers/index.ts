import { combineReducers } from '@reduxjs/toolkit'

import auth from './authReducer'
import display from './displayReducer'
import permission from './permissionReducer'
import loader from './loaderReducer'
import user from './userReducer'
import kwl from './kwlReducers'
import cashOut from './cashOutReducer'

const rootReducer = combineReducers({
  auth,
  user,
  display,
  permission,
  loader,
  kwl,
  cashOut,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
