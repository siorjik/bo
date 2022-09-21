export type UserType = {
  login: string,
  pass: string,
}

export type AuthType = {
  user: UserType,
  userFetchStart: boolean,
  userFetchFinished: boolean,
  status: string,
  error: string,
}
