import { useState, useEffect, createContext } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'

import Route from './components/Router'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

import { useAppSelector, useAppDispatch } from './store/index'
import { history } from './helpers/history'
import getDisplayData from './helpers/getDisplayData'

import { setDisplayData } from './store/actions/displayActions'
import { fetchUser } from './store/actions/authActions'
import { fetchPermissiionList, fetchUserPermissiionList } from './store/actions/permissionActions'
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
    permission: { list, userPermissionList }
  } = state

  const isAuth = tokens.accessToken

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
      if (tokens.accessToken) {
        await dispatch(fetchUser())
        await dispatch(fetchPermissiionList())
        await dispatch(fetchUserPermissiionList())
      }
    })()
  }, [tokens])

  return (
    <HistoryRouter history={history}>
      <CssBaseline />
      <MainContext.Provider value={{ user, permissionList: list, userPermissionList }}>
        {
          isAuth &&
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
                <main><Route isAuth={!!isAuth} /></main>
                <footer>footer</footer>
              </div>
            </div>
          </div>
        }

        {!isAuth && <Route isAuth={!!isAuth} />}
      </MainContext.Provider>
    </HistoryRouter>
  )
}

export default App
