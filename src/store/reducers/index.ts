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
import transaction from './transactionReducer'

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
  transaction,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
