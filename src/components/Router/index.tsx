import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { MainContext } from '../../App'
import getMappedRouting from './getMappedRouting'

import { loginPath, pageNotFoundPath, profilePath } from '../../utils/appPaths'

import Login from '../../pages/Login'
import PageNotFound from '../../pages/PageNotFound'

import Loader from '../Loader'
import Profile from '../../pages/Profile'

type RouterProps = {
  isAuth: boolean,
}

export default ({ isAuth }: RouterProps) => {
  const { userPermissionList } = useContext(MainContext)

  return (
    <>
      {
        isAuth ?
          <Routes>
            {
              !!getMappedRouting(userPermissionList).length ?
              <>
                {getMappedRouting(userPermissionList)}
                <Route path={profilePath} element={<Profile />} />
                <Route path={loginPath} element={<Navigate replace to='/' />} />
                <Route path={pageNotFoundPath} element={<PageNotFound />} />
                <Route path='*' element={<Navigate replace to={pageNotFoundPath} />} />
              </>
              :
              <Route path='*' element={<Loader />} />
            }
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
