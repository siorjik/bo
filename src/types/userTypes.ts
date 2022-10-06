export type UserDataType = {
  login: string,
  pass: string,
}

export type UserType = {
  data: UserDataType,
  userFetchStart: boolean,
  userFetchFinished: boolean,
  error: string,
}