import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { MainContext } from '../../App'
import getMapedRouting from './getMapedRouting'

import { loginPath } from '../../utils/appPaths'

import Login from '../../pages/Login'
import Loader from '../Loader'

type RouterProps = {
  isAuth: boolean,
}

export default ({ isAuth }: RouterProps) => {
  const { permissionList, userPermissionList } = useContext(MainContext)

  return (
    <>
      {
        isAuth ?
          <Routes>
            {
              !!getMapedRouting(permissionList, userPermissionList).length ?
              <>
                {getMapedRouting(permissionList, userPermissionList)}
                <Route path='*' element={<Navigate replace to='/' />} />
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
