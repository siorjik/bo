import { createAction } from '@reduxjs/toolkit'

import { SET_DISPLAY_DATA } from './actionTypes'

export const setDisplayData = createAction(SET_DISPLAY_DATA, (data) => ({ payload: data }))
