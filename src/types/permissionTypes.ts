export type PermissionDataType = {
  key: string,
}

export type PermissionType = {
  userPermissionList: PermissionDataType[],
  list: PermissionDataType[],
  userPermissionListFetchStart: boolean,
  userPermissionListFetchFinished: boolean,
  listFetchStart: boolean,
  listFetchFinished: boolean,
  error: string
}
