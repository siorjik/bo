import { useState, useEffect } from 'react'
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

const App = () => {
  const [open, setOpen] = useState(false)
  const [path, setPath] = useState('')

  const state = useAppSelector(state => state)
  const { display: { isMobileView } } = state

  const isAuth = /*state.auth.user.login*/ true

  const dispatch = useAppDispatch()

  useEffect(() => {
    getDisplayData((data) => dispatch(setDisplayData(data)))

    history.listen((props: { location: { pathname: string } }) => {
      setPath(props.location.pathname)
    })
  }, [])

  useEffect(() => {
    if (isMobileView && open) setOpen(!open)
  }, [path])


  return (
    <HistoryRouter history={history}>
      <CssBaseline />
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
    </HistoryRouter>
  )
}

export default App
