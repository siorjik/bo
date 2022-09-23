import { PermissionDataType } from "../types/permissionTypes"
import { collapseItems } from '../utils/constants'

const getMapedPermissionList = (permissionList: PermissionDataType[]) => {
  const result: { [key: string]: string } = {}

  permissionList.forEach(item => result[item.key] = item.key)

  return result
}

export const sidebarPermissions = (permissionList: PermissionDataType[], collapseItem: string) => {
  const permissions = getMapedPermissionList(permissionList)

  switch (collapseItem) {
    case collapseItems.KWL:
      return [
        permissionList.find((item: PermissionDataType) => item.key === permissions.SuperUser),
      ]
    case 'other':
      return [
        permissionList.find((item: PermissionDataType) => item.key === permissions.SuperUser),
      ]

    default: return [permissionList.find((item: PermissionDataType) => item.key === permissions.BackOffice),]
  }
}

export const getPermissions =  (objectPermissionList: PermissionDataType[], userPermissionList: PermissionDataType[]) => {
  let isPermission = false

  objectPermissionList.forEach((item) => {
    if (userPermissionList.find(perm => perm.key === item.key)) isPermission = true
  })

  return isPermission
}
