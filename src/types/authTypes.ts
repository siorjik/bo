export type AuthType = {
  error: string,
  tokens: {
    accessToken: string,
    refreshToken: string,
  },
  tokensFetchStart: boolean,
  tokensFetchFinished: boolean,
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
