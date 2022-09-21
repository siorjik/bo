import { Routes, Route, Navigate } from 'react-router-dom'

import Login from '../pages/Login'

type RouterProps = {
  isAuth: boolean,
}

const Router = ({ isAuth }: RouterProps) => {
  return (
    <>
      {
        isAuth ?
        <Routes>
          <Route path='/' element={<Navigate replace to='/main' />} />
          <Route path='/main' element={<div>Main Page</div>} />
          <Route path='/user' element={<div>User page</div>} />
          <Route path='/other' element={<div>Other page</div>} />
          <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
        :
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Navigate replace to='/login' />} />
        </Routes>
      }
    </>
  )
}

export default Router
