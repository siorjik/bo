import { useState, useEffect, useContext, MouseEvent } from 'react'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import { NavLink } from 'react-router-dom'
import { MenuRounded, MenuOpenRounded } from '@mui/icons-material'

import { getLocationProp } from '../helpers/history'
import { getSidebarPermissions } from '../services/permissionsService'
import { MainContext } from '../App'
import {
  kwlPath,
  kwlUsersPath,
  kwlSitesPath,
  mobileUsersPath,
  agentsProfilesPath,
  agentGroupsPath,
  topUpPath,
  topUpCashrailPath,
  topUpKuvaCoinPath,
  topUpKuvaWhiteLabelPath,
  topUpUsdkPath,
  bugReportPath,
} from '../utils/appPaths'
import { collapseItems, menuItems } from '../utils/constants'

type CollapseMenuType = {
  kwl: boolean,
  topUp: boolean,
}

export default ({ isMobileView }: { isMobileView?: boolean }) => {
  const [open, setOpen] = useState<CollapseMenuType>({ kwl: false, topUp: false })
  const [menuOpen, setMenuOpen] = useState(true)

  const { permissionList, userPermissionList } = useContext(MainContext)

  const pathname = getLocationProp('pathname')

  useEffect(() => {
    if (userPermissionList.length) setOpen({ ...open, [getOpenedCollapse(pathname)]: true })
  }, [userPermissionList, pathname])

  const onClick = (e: MouseEvent, val: string) => {
    const target = e.target as HTMLLIElement

    const isLink = target.className === 'item-link'

    if (!isLink) setOpen({ ...open, [val]: !open[val as keyof CollapseMenuType] })
  }

  const getOpenedCollapse = (path: string) => {
    switch (path) {
      case kwlPath:
      case kwlUsersPath:
      case kwlSitesPath:
        return collapseItems.KWL

      case topUpPath:
      case topUpCashrailPath:
      case topUpKuvaCoinPath:
      case topUpKuvaWhiteLabelPath:
      case topUpUsdkPath:
        return collapseItems.TOP_UP

      default: return ''
    }
  }

  const isPermission = (checkedItem: string) => getSidebarPermissions(permissionList, userPermissionList, checkedItem)

  return (
    <>
      {!isMobileView && <div className="switch-menu-section">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {!menuOpen ? <MenuRounded /> : <MenuOpenRounded />}
        </div>
      </div>}
      <div className={`sidebar ${!menuOpen ? 'menu-closed' : ''}`}>
        {<MenuList>
          {isPermission(collapseItems.KWL) && <MenuItem onClick={(e) => onClick(e, collapseItems.KWL)}>
            <div className="item">
              <Collapse component="div" in={open.kwl} collapsedSize='35px' className='collapse'>
                <h4>
                  Kuva White Label
                  {
                    open.kwl ?
                      <div className='item-expand'><ExpandLess /></div> : <div className='item-expand'><ExpandMore /></div>
                  }
                </h4>
                <NavLink className='item-link' to={kwlSitesPath}>KWL Sites</NavLink>
                <NavLink className='item-link' to={kwlUsersPath}>Users</NavLink>
              </Collapse>
            </div>
          </MenuItem>}

          {isPermission(menuItems.MOBILE_USERS) && <MenuItem>
            <div className="item">
              <h4><NavLink className='item-link' to={mobileUsersPath}>Mobile Users</NavLink></h4>
            </div>
          </MenuItem>}

          {isPermission(menuItems.AGENTS_PROFILES) && <MenuItem>
            <div className="item">
              <h4><NavLink className='item-link' to={agentsProfilesPath}>Agents Profiles</NavLink></h4>
            </div>
          </MenuItem>}

          {isPermission(menuItems.AGENT_GROUPS) && <MenuItem>
            <div className="item">
              <h4><NavLink className='item-link' to={agentGroupsPath}>Agent Groups</NavLink></h4>
            </div>
          </MenuItem>}

          {isPermission(collapseItems.TOP_UP) && <MenuItem onClick={(e) => onClick(e, collapseItems.TOP_UP)}>
            <div className="item">
              <Collapse component="div" in={open.topUp} collapsedSize='35px' className='collapse'>
                <h4>
                  Top Up
                  {
                    open.topUp ?
                      <div className='item-expand'><ExpandLess /></div> : <div className='item-expand'><ExpandMore /></div>
                  }
                </h4>
                <NavLink className='item-link' to={topUpUsdkPath}>USDk</NavLink>
                <NavLink className='item-link' to={topUpKuvaCoinPath}>Kuva Coin</NavLink>
                <NavLink className='item-link' to={topUpCashrailPath}>Cashrail</NavLink>
                <NavLink className='item-link' to={topUpKuvaWhiteLabelPath}>Kuva White Label</NavLink>
              </Collapse>
            </div>
          </MenuItem>}

          {isPermission(menuItems.BUG_REPORT) && <MenuItem>
            <div className="item">
              <h4><NavLink className='item-link' to={bugReportPath}>Bug Report</NavLink></h4>
            </div>
          </MenuItem>}
        </MenuList>}
      </div>
    </>
  )
}
