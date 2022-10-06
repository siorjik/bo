export type AuthType = {
  error: string,
  tokens: {
    accessToken: string,
    refreshToken: string,
  },
  tokensFetchStart: boolean,
  tokensFetchFinished: boolean,
}
