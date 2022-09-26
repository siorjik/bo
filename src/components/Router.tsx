import { Routes, Route, Navigate } from 'react-router-dom'

import {
  loginPath,
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
} from '../utils/appPaths'

import Login from '../pages/Login'
import KuvaWhiteLabel from '../pages/KuvaWhiteLabel'
import KuvaWhiteLabelSites from '../pages/KuvaWhiteLabel/KuvaWhiteLabelSites'
import KuvaWhiteLabelUsers from '../pages/KuvaWhiteLabel/KuvaWhiteLabelUsers'
import MobileUsers from '../pages/MobileUsers'
import AgentsProfiles from '../pages/AgentsProfiles'
import AgentGroups from '../pages/AgentGroups'
import TopUp from '../pages/TopUp'
import USDk from '../pages/TopUp/USDk'
import KuvaCoin from '../pages/TopUp/KuvaCoin'
import Cashrail from '../pages/TopUp/Cashrail'
import TopUpKuvaWhiteLabel from '../pages/TopUp/KuvaWhiteLabel'
import BugReport from '../pages/BugReport'

type RouterProps = {
  isAuth: boolean,
}

export default ({ isAuth }: RouterProps) => {
  return (
    <>
      {
        isAuth ?
        <Routes>
          <Route path='/' element={<Navigate replace to={kwlPath} />} />
          <Route path={kwlPath} element={<Navigate replace to={kwlSitesPath} />} />
          <Route path={kwlPath} element={<KuvaWhiteLabel />} >
            <Route path={kwlSitesPath} element={<KuvaWhiteLabelSites />} />
            <Route path={kwlUsersPath} element={<KuvaWhiteLabelUsers />} />
          </Route>
          <Route path={mobileUsersPath} element={<MobileUsers />} />
          <Route path={agentsProfilesPath} element={<AgentsProfiles />} />
          <Route path={agentGroupsPath} element={<AgentGroups />} />
          <Route path={topUpPath} element={<TopUp />} >
            <Route path={topUpUsdkPath} element={<USDk />} />
            <Route path={topUpKuvaCoinPath} element={<KuvaCoin />} />
            <Route path={topUpCashrailPath} element={<Cashrail />} />
            <Route path={topUpKuvaWhiteLabelPath} element={<TopUpKuvaWhiteLabel />} />
          </Route>
          <Route path={bugReportPath} element={<BugReport />} />
          <Route path='/other' element={<div>Other</div>} />
          <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
        :
        <Routes>
          <Route path={loginPath} element={<Login />} />
          <Route path='*' element={<Navigate replace to={loginPath} />} />
        </Routes>
      }
    </>
  )
}
