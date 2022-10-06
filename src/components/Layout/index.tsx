import { useState, useContext, useEffect } from 'react'
import Drawer from '@mui/material/Drawer'

import Header from "../Header"
import Footer from '../Footer'
import Sidebar from "../Sidebar"
import { MainContext } from '../../App'

import { pageNotFoundPath, profilePath } from '../../utils/appPaths'
import { getLocationProp } from '../../helpers/history'
import SimpleLayout from './SimpleLayout'

export default ({ children, path }: { children: JSX.Element, path: string }) => {
  const [open, setOpen] = useState<boolean>(false)

  const { isMobileView } = useContext(MainContext)

  const pathname = getLocationProp('pathname')

  useEffect(() => {
    if (isMobileView && open) setOpen(!open)
  }, [path])

  const isPNF = pathname === pageNotFoundPath
  const isProfile = pathname === profilePath

  return (
    <>
      {!isPNF && !isProfile &&
        <>
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
                  <aside><Sidebar isMobileView={isMobileView} /></aside>
                </div>
              </Drawer>
            }
            <div className="content-wrap">
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </>}

        {isPNF && <main>{children}</main>}

        {isProfile && <SimpleLayout>{children}</SimpleLayout>}
    </>
  )
}
