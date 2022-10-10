export type UserDataType = {
  email: string,
  name: string,
  phoneNumber: string,
  isTwoFactorEnabled: boolean,
}

export type UserType = {
  data: UserDataType,
  userFetchStart: boolean,
  userFetchFinished: boolean,
  error: string,
}