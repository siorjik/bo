import { PermissionDataType } from "../types/permissionTypes"
import { collapseItems, menuItems } from '../utils/constants'

const getMapedPermissionList = (permissionList: PermissionDataType[]) => {
  const result: { [key: string]: string } = {}

  permissionList.forEach(item => result[item.key] = item.key)

  return result
}

export const sidebarPermissions = (permissionList: PermissionDataType[], checkedItem: string) => {
  const permissions = getMapedPermissionList(permissionList)

  switch (checkedItem) {
    case collapseItems.KWL:
      return [
        permissionList.find((item: PermissionDataType) => item.key === permissions.SuperUser),
      ]
    case collapseItems.TOP_UP:
      return [
        permissionList.find((item: PermissionDataType) => item.key === permissions.SuperUser),
      ]
    case 'other':
      return [
        permissionList.find((item: PermissionDataType) => item.key === permissions.SuperUser),
      ]

    case menuItems.MOBILE_USERS:
      return [
        permissionList.find((item: PermissionDataType) => item.key === permissions.SuperUser),
      ]
    case menuItems.AGENTS_PROFILES:
      return [
        permissionList.find((item: PermissionDataType) => item.key === permissions.Agents_Access),
      ]
    case menuItems.AGENT_GROUPS:
      return [
        permissionList.find((item: PermissionDataType) => item.key === permissions.Agents_Access),
      ]
    case menuItems.BUG_REPORT:
      return [
        permissionList.find((item: PermissionDataType) => item.key === permissions.Bug_Reports_Access),
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
