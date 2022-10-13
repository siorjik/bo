export type AuthType = {
  error: string,
  tokens: {
    accessToken: string,
    refreshToken: string,
  },
  tokensFetchStart: boolean,
  tokensFetchFinished: boolean,
  tokensRefreshStart: boolean,
  tokensRefreshFinished: boolean,
  authenticator: {
    sharedKey: string,
    authenticatorUri: string,
  },
  authenticatorFetchStart: boolean,
  authenticatorFetchFinished: boolean,
  authenticatorConfirmStart: boolean,
  authenticatorConfirmFinished: boolean,
  authenticatorDisableStart: boolean,
  authenticatorDisableFinished: boolean,
}
