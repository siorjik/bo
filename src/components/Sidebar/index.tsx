import { useState, useEffect, useContext, MouseEvent } from 'react'
import { MenuRounded, MenuOpenRounded } from '@mui/icons-material'

import { getLocationProp } from '../../helpers/history'
import { MainContext } from '../../App'
import getOpenedCollapse from './getOpenedCollapse'
import MappedSidebar from './MappedSidebar'

type CollapseMenuType = {
  kwl: boolean,
  topUp: boolean,
  kuvaLocal: boolean,
  currencyCloud: boolean,
  masterNode: boolean,
  outboundTransfers: boolean,
  cashout: boolean,
  payments: boolean,
  transactions: boolean,
  mobileTransfers: boolean,
}

export default ({ isMobileView }: { isMobileView?: boolean }) => {
  const [open, setOpen] = useState<CollapseMenuType>({
    kwl: false,
    topUp: false,
    kuvaLocal: false,
    currencyCloud: false,
    masterNode: false,
    outboundTransfers: false,
    cashout: false,
    payments: false,
    transactions: false,
    mobileTransfers: false,
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

    if (!isLink) setOpen({ ...open, [val]: !open[val as keyof CollapseMenuType] })
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
