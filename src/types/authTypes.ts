export type UserType = {
  login: string,
  pass: string,
}

export type AuthType = {
  user: UserType,
  userFetchStart: boolean,
  userFetchFinished: boolean,
  error: string,
  tokens: {
    accessToken: string,
    refreshToken: string,
  },
  tokensFetchStart: boolean,
  tokensFetchFinished: boolean,
}
