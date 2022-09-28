import { PermissionDataType } from "../types/permissionTypes"
import { collapseItems, menuItems } from '../utils/constants'

export const getMapedPermissionList = (permissionList: PermissionDataType[]) => {
  const result: { [key: string]: string } = {}

  permissionList.forEach(item => result[item.key] = item.key)

  return result
}

export const getSidebarPermissions = (permissionList: PermissionDataType[], userPermissionList: PermissionDataType[], checkedItem: string) => {
  const permissions = getMapedPermissionList(permissionList)
  let showItemList: string[] = []

  userPermissionList.forEach(item => {
    if (item.key === permissions.SuperUser) {
      showItemList = [...showItemList, collapseItems.KWL]
    } else if (item.key === permissions.Bug_Reports_Access) {
      showItemList = [...showItemList, menuItems.BUG_REPORT]
    } else if (item.key === permissions.Agents_Access) {
      showItemList = [...showItemList, menuItems.AGENTS_PROFILES, menuItems.AGENT_GROUPS]
    } else if (item.key === permissions.Top_Up_Access) {
      showItemList = [...showItemList, collapseItems.TOP_UP]
    } else if (item.key === permissions.Users_Access) {
      showItemList = [...showItemList, menuItems.MOBILE_USERS]
    }
  })

  return showItemList.find(item => item === checkedItem)
}
