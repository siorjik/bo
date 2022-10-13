import { AsyncThunkAction } from "@reduxjs/toolkit"

import { refreshTokens } from "../store/actions/authActions"

import apiRequestService from './apiRequestService'

type ErrType = {
  response: { status: number }
}

type MethodType = 'post' | 'put' | 'get' | 'delete'

export default async (
  dispatch: (arg: AsyncThunkAction<{ accessToken: string, refreshToken: string } | undefined, string, {}>) => {},
  method: MethodType,
  url: string,
  data?: { [key: string]: string },
) => {
  try {
    return await apiRequestService(method, url, data)
  } catch (err) {
    const error = err as ErrType

    const storageRefresh = window.localStorage.getItem('tokens') &&
      JSON.parse(window.localStorage.getItem('tokens')!).refreshToken

    if (error.response.status === 401 && storageRefresh) {
      dispatch(refreshTokens(storageRefresh))

      return await apiRequestService(method, url, data)
    } else throw err
  }
}
