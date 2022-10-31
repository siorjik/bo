export type UserDataType = {
  email: string,
  name: string,
  phoneNumber: string,
  isTwoFactorEnabled: boolean,
  extId?: string,
  firstName?: string,
  lastName?: string, 
}

export type UserType = {
  data: UserDataType,
  userFetchStart: boolean,
  userFetchFinished: boolean,
  error: string,
}