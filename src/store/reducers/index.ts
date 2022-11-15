import { combineReducers } from '@reduxjs/toolkit'

import auth from './authReducer'
import display from './displayReducer'
import permission from './permissionReducer'
import loader from './loaderReducer'
import user from './userReducer'
import kwl from './kwlReducers'
import cashOut from './cashOutReducer'
import topUp from './topUpReducer'
import country from './countryReducer'
import mobileUser from './mobileUserReducer'

const rootReducer = combineReducers({
  auth,
  user,
  display,
  permission,
  loader,
  kwl,
  cashOut,
  topUp,
  country,
  mobileUser,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
