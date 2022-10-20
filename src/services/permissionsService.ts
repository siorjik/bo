import { PermissionDataType } from "../types/permissionTypes"
import { collapseItems, menuItems } from '../utils/constants'

export const getMapedPermissionList = (permissionList: PermissionDataType[]) => {
  const result: { [key: string]: string } = {}

  permissionList.forEach(item => result[item.key] = item.key)

  return result
}

export const getSidebarPermissions = (userPermissionList: PermissionDataType[], checkedItem: string) => {
  const permissions = getMapedPermissionList(userPermissionList)
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
    } else if (item.key === permissions.Contacts_Access) {
      showItemList = [...showItemList, menuItems.CONTACTS_ACCESS]
    } else if (item.key === permissions.KuvaLocalAdmin) {
      showItemList = [...showItemList, collapseItems.KUVA_LOCAL]
    } else if (item.key === permissions.Charity_Manager) {
      showItemList = [...showItemList, menuItems.CHARITY_MANAGER]
    } else if (item.key === permissions.Credit_Vendor) {
      showItemList = [...showItemList, menuItems.CREDIT_VENDOR]
    } else if (item.key === permissions.Promo_Code_Manager) {
      showItemList = [...showItemList, menuItems.PROMO_CODE_MANAGER]
    } else if (item.key === permissions.Credit_Wallet_Reserve_Treasury_Reconciliation) {
      showItemList = [...showItemList, menuItems.CREDIT_WALLET_TREASURE]
    } else if (item.key === permissions.Currency_Cloud_Rate_Access) {
      showItemList = [...showItemList, collapseItems.CURRENCY_CLOUD]
    } else if (item.key === permissions.Feedbacks_Access) {
      showItemList = [...showItemList, menuItems.FEEDBACKS_ACCESS]
    } else if (item.key === permissions.Masternodes_Access) {
      showItemList = [...showItemList, collapseItems.MASTER_NODE]
    } else if (item.key === permissions.Outbound_Transfers_Access) {
      showItemList = [...showItemList, collapseItems.OUTBOUND_TRANSFERS, collapseItems.CASHOUT]
    } else if (item.key === permissions.Push_Notifications_Access) {
      showItemList = [...showItemList, menuItems.PUSH_NOTIFICATION]
    }
  })

  return showItemList.find(item => item === checkedItem)
}
