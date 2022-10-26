import { useState, useEffect, useContext, MouseEvent } from 'react'
import { MenuRounded, MenuOpenRounded } from '@mui/icons-material'

import { getLocationProp } from '../../helpers/history'
import { MainContext } from '../../App'
import getOpenedCollapse from './getOpenedCollapse'
import MappedSidebar from './MappedSidebar'
import { collapseItems } from '../../utils/constants'

export default ({ isMobileView }: { isMobileView?: boolean }) => {
  const [open, setOpen] = useState<{[key: string]: boolean}>({
    [collapseItems.KWL]: false,
    [collapseItems.TOP_UP]: false,
    [collapseItems.KUVA_LOCAL]: false,
    [collapseItems.CURRENCY_CLOUD]: false,
    [collapseItems.MASTER_NODE]: false,
    [collapseItems.OUTBOUND_TRANSFERS]: false,
    [collapseItems.CASHOUT]: false,
    [collapseItems.PAYMENTS]: false,
    [collapseItems.TRANSACTIONS]: false,
    [collapseItems.MOBILE_TRANSFERS]: false,
  })
  const [menuOpen, setMenuOpen] = useState(true)

  const { userPermissionList } = useContext(MainContext)

  const pathname = getLocationProp('pathname')

  useEffect(() => {
    if (userPermissionList.length) setOpen({ ...open, [getOpenedCollapse(pathname)]: true })
  }, [userPermissionList, pathname])

  const onClick = (e: MouseEvent, val: string) => {
    const target = e.target as HTMLLIElement

    const isLink = target.className === 'item-link'

    if (!isLink) setOpen({ ...open, [val]: !open[val] })
  }

  return (
    <>
      {!isMobileView && <div className="switch-menu-section">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {!menuOpen ? <MenuRounded /> : <MenuOpenRounded />}
        </div>
      </div>}
      <div className={`sidebar ${!menuOpen ? 'menu-closed' : ''}`}>
        <MappedSidebar userPermissionList={userPermissionList} onClick={onClick} open={open} />
      </div>
    </>
  )
}
