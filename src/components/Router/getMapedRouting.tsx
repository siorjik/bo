import { Fragment } from "react"
import { Route, Navigate } from "react-router-dom"

import {  getMapedPermissionList } from '../../services/permissionsService'
import { PermissionDataType } from '../../types/permissionTypes'

import {
  kwlPath,
  kwlSitesPath,
  kwlUsersPath,
  mobileUsersPath,
  agentsProfilesPath,
  agentGroupsPath,
  topUpPath,
  topUpUsdkPath,
  topUpKuvaCoinPath,
  topUpCashrailPath,
  topUpKuvaWhiteLabelPath,
  bugReportPath
} from '../../utils/appPaths'

import KuvaWhiteLabel from '../../pages/KuvaWhiteLabel'
import KuvaWhiteLabelSites from '../../pages/KuvaWhiteLabel/KuvaWhiteLabelSites'
import KuvaWhiteLabelUsers from '../../pages/KuvaWhiteLabel/KuvaWhiteLabelUsers'
import MobileUsers from '../../pages/MobileUsers'
import AgentsProfiles from '../../pages/AgentsProfiles'
import AgentGroups from '../../pages/AgentGroups'
import TopUp from '../../pages/TopUp'
import USDk from '../../pages/TopUp/USDk'
import KuvaCoin from '../../pages/TopUp/KuvaCoin'
import Cashrail from '../../pages/TopUp/Cashrail'
import TopUpKuvaWhiteLabel from '../../pages/TopUp/KuvaWhiteLabel'
import BugReport from '../../pages/BugReport'

export default (permissionList: PermissionDataType[], userPermissionList: PermissionDataType[]) => {
  const permissions = getMapedPermissionList(permissionList)
  let showRoutesList: JSX.Element[] = []

  userPermissionList.forEach(item => {
    if (item.key === permissions.SuperUser) {
      showRoutesList = [...showRoutesList,
        <Fragment key={permissions.SuperUser}>
          <Route path='/' element={<Navigate replace to={kwlPath} />} />
          <Route path={kwlPath} element={<Navigate replace to={kwlSitesPath} />} />
          <Route path={kwlPath} element={<KuvaWhiteLabel />} >
            <Route path={kwlSitesPath} element={<KuvaWhiteLabelSites />} />
            <Route path={kwlUsersPath} element={<KuvaWhiteLabelUsers />} />
          </Route>
        </Fragment>
      ]
    } else if (item.key === permissions.Bug_Reports_Access) {
      showRoutesList = [...showRoutesList,
        <Fragment key={permissions.Bug_Reports_Access}>
          <Route path='/' element={<Navigate replace to={bugReportPath} />} />
          <Route path={bugReportPath} element={<BugReport />} />
        </Fragment>
      ]
    } else if (item.key === permissions.Agents_Access) {
      showRoutesList = [...showRoutesList,
        <Fragment key={permissions.Agents_Access}>
          <Route path='/' element={<Navigate replace to={agentsProfilesPath} />} />
          <Route path={agentsProfilesPath} element={<AgentsProfiles />} />
          <Route path={agentGroupsPath} element={<AgentGroups />} />
        </Fragment>
      ]
    } else if (item.key === permissions.Top_Up_Access) {
      showRoutesList = [...showRoutesList,
        <Fragment key={permissions.Top_Up_Access}>
          <Route path='/' element={<Navigate replace to={topUpPath} />} />
          <Route path={topUpPath} element={<Navigate replace to={topUpUsdkPath} />} />
          <Route path={topUpPath} element={<TopUp />} >
            <Route path={topUpUsdkPath} element={<USDk />} />
            <Route path={topUpKuvaCoinPath} element={<KuvaCoin />} />
            <Route path={topUpCashrailPath} element={<Cashrail />} />
            <Route path={topUpKuvaWhiteLabelPath} element={<TopUpKuvaWhiteLabel />} />
          </Route>
        </Fragment>
      ]
    } else if (item.key === permissions.Users_Access) {
      showRoutesList = [...showRoutesList,
        <Fragment key={permissions.Users_Access}>
          <Route path='/' element={<Navigate replace to={mobileUsersPath} />} />
          <Route path={mobileUsersPath} element={<MobileUsers />} />
        </Fragment>
      ]
    }
  })

  return showRoutesList
}