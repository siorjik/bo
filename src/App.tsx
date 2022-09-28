import { useState, useEffect, createContext } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'

import Route from './components/Router'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Loader from './components/Loader'

import { useAppSelector, useAppDispatch } from './store/index'
import { history } from './helpers/history'
import getDisplayData from './helpers/getDisplayData'

import { setDisplayData } from './store/actions/displayActions'
import { fetchTokens, fetchUser } from './store/actions/authActions'
import { fetchPermissiionList, fetchUserPermissiionList } from './store/actions/permissionActions'
import { setStartLoader, setStopLoader } from './store/actions/loaderActions'
import { UserType } from './types/authTypes'
import { PermissionDataType } from './types/permissionTypes'

export const MainContext = createContext(
  {
    user: { login: '', pass: '' } as UserType,
    permissionList: [] as PermissionDataType[],
    userPermissionList: [] as PermissionDataType[],
  }
)

const App = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [path, setPath] = useState<string>('')

  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state)

  const {
    display: { isMobileView },
    auth: { user, tokens },
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
      {!isShowLoader && <MainContext.Provider value={{ user, permissionList: list, userPermissionList }}>
        {
          authToken &&
          <div className='main-wrap'>
            <Header menuToggle={async () => setOpen(!open)} isMobileView={isMobileView} />
            <div className="content">
              {!isMobileView && <aside><Sidebar /></aside>}
              {
                isMobileView &&
                <Drawer
                  anchor='left'
                  open={open}
                  onClose={() => setOpen(!open)}
                >
                  <div className='content mobile-menu'>
                    <aside><Sidebar /></aside>
                  </div>
                </Drawer>
              }
              <div className="content-wrap">
                <main><Route isAuth={!!authToken} /></main>
                <footer>footer</footer>
              </div>
            </div>
          </div>
        }

        {!authToken && <Route isAuth={!!authToken} />}
      </MainContext.Provider>}
      {isShowLoader && <Loader />}
    </HistoryRouter>
  )
}

export default App
