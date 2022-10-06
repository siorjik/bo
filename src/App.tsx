import { useState, useEffect, createContext } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'

import Router from './components/Router'
import Loader from './components/Loader'
import Layout from './components/Layout'

import { useAppSelector, useAppDispatch } from './store/index'
import { history } from './helpers/history'
import getDisplayData from './helpers/getDisplayData'

import { setDisplayData } from './store/actions/displayActions'
import { fetchTokens } from './store/actions/authActions'
import { fetchUser } from './store/actions/userActions'
import { fetchPermissiionList, fetchUserPermissiionList } from './store/actions/permissionActions'
import { setStartLoader, setStopLoader } from './store/actions/loaderActions'
import { UserDataType } from './types/userTypes'
import { PermissionDataType } from './types/permissionTypes'

export const MainContext = createContext(
  {
    user: { login: '', pass: '' } as UserDataType,
    permissionList: [] as PermissionDataType[],
    userPermissionList: [] as PermissionDataType[],
    isMobileView: false
  }
)

const App = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [path, setPath] = useState<string>('')

  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state)

  const {
    display: { isMobileView },
    auth: { tokens },
    user: { data },
    permission: { list, userPermissionList },
    loader: { isShowLoader }
  } = state

  const storageAccess = window.localStorage.getItem('tokens') &&
    JSON.parse(window.localStorage.getItem('tokens')!).accessToken

  const authToken = tokens.accessToken || storageAccess

  useEffect(() => {
    getDisplayData((data) => dispatch(setDisplayData(data)))

    history.listen((props: { location: { pathname: string } }) => {
      setPath(props.location.pathname)
    })
  }, [])

  useEffect(() => {
    if (isMobileView && open) setOpen(!open)
  }, [path])

  useEffect(() => {
    (async () => {
      if (storageAccess) {
        dispatch(setStartLoader())

        if (!tokens.accessToken) {
          await dispatch(fetchTokens(null))
        }

        await dispatch(fetchUser())
        await dispatch(fetchPermissiionList())
        await dispatch(fetchUserPermissiionList())
        dispatch(setStopLoader())
      }
    })()
  }, [storageAccess])

  return (
    <HistoryRouter history={history}>
      <CssBaseline />
      {!isShowLoader && <MainContext.Provider value={{ user: data, permissionList: list, userPermissionList, isMobileView }}>
        {authToken && <Layout path={path}><Router isAuth={!!authToken} /></Layout>}

        {!authToken && <Router isAuth={!!authToken} />}
      </MainContext.Provider>}
      {isShowLoader && <Loader />}
    </HistoryRouter>
  )
}

export default App
