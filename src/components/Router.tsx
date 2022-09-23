import { Routes, Route, Navigate } from 'react-router-dom'

import {
  loginPath,
  kwlSitesPath,
  kwlUsersPath,
} from '../utils/appPaths'

import Login from '../pages/Login'
import KuvaWhiteLabelSites from '../pages/KuvaWhiteLabel/KuvaWhiteLabelSites'
import KuvaWhiteLabelUsers from '../pages/KuvaWhiteLabel/KuvaWhiteLabelUsers'

type RouterProps = {
  isAuth: boolean,
}

export default ({ isAuth }: RouterProps) => {
  return (
    <>
      {
        isAuth ?
        <Routes>
          <Route path='/' element={<Navigate replace to={kwlSitesPath} />} />
          <Route path={kwlSitesPath} element={<KuvaWhiteLabelSites />} />
          <Route path={kwlUsersPath} element={<KuvaWhiteLabelUsers />} />
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
