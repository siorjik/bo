import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { MainContext } from '../../App'
import MappedRouting from './MappedRouting'

import { loginPath } from '../../utils/appPaths'

import Login from '../../pages/Login'

type RouterProps = {
  isAuth: boolean,
}

export default ({ isAuth }: RouterProps) => {

  const { userPermissionList } = useContext(MainContext)

  return (
    <>
      {
        isAuth ?
          <MappedRouting userPermissionList={userPermissionList} />
          :
          <Routes>
            <Route path={loginPath} element={<Login />} />
            <Route path='*' element={<Navigate replace to={loginPath} />} />
          </Routes>
      }
    </>
  )
}
