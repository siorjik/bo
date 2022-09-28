import { useState, useEffect, useContext } from 'react'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import { NavLink } from 'react-router-dom'

import { getLocationProp } from '../helpers/history'
import { getSidebarPermissions } from '../services/permissionsService'
import { MainContext } from '../App'
import {
  kwlPath,
  kwlUsersPath,
  kwlSitesPath,
  loginPath,
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

export default () => {
  const [open, setOpen] = useState<CollapseMenuType>({ kwl: false, topUp: false })

  const { permissionList, userPermissionList } = useContext(MainContext)

  const pathname = getLocationProp('pathname')

  useEffect(() => {
    if (userPermissionList.length) setOpen({ ...open, [getOpenedCollapse(pathname)]: true })
  }, [userPermissionList])

  const onClick = (val: string) => {
    setOpen({ ...open, [val]: !open[val as keyof CollapseMenuType] })
  }

  const getOpenedCollapse = (path: string) => {
    switch (path) {
      case loginPath:
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
    <div className="sidebar">
      {<MenuList>
        {isPermission(collapseItems.KWL) && <MenuItem>
          <div className="item">
            <Collapse component="div" in={open.kwl} collapsedSize='35px'>
              <h4 onClick={() => onClick(collapseItems.KWL)}>
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
            <NavLink className='item-link' to={mobileUsersPath}>Mobile Users</NavLink>
          </div>
        </MenuItem>}

        {isPermission(menuItems.AGENTS_PROFILES) && <MenuItem>
          <div className="item">
            <NavLink className='item-link' to={agentsProfilesPath}>Agents Profiles</NavLink>
          </div>
        </MenuItem>}

        {isPermission(menuItems.AGENT_GROUPS) && <MenuItem>
          <div className="item">
            <NavLink className='item-link' to={agentGroupsPath}>Agent Groups</NavLink>
          </div>
        </MenuItem>}

        {isPermission(collapseItems.TOP_UP) && <MenuItem>
          <div className="item">
            <Collapse component="div" in={open.topUp} collapsedSize='35px' className='collapse'>
              <h4 onClick={() => onClick(collapseItems.TOP_UP)}>
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
            <NavLink className='item-link' to={bugReportPath}>Bug Report</NavLink>
          </div>
        </MenuItem>}
      </MenuList>}
    </div>
  )
}
