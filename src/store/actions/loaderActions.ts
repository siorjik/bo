import { createAction } from '@reduxjs/toolkit'

import { SET_START_LOADER, SET_STOP_LOADER } from './actionTypes'

export const setStartLoader = createAction(SET_START_LOADER)
export const setStopLoader = createAction(SET_STOP_LOADER)
