import { useState, useEffect, useContext } from 'react'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import { NavLink } from 'react-router-dom'

import { getLocationProp } from '../helpers/history'
import { getPermissions, sidebarPermissions } from '../services/permissionsService'
import { MainContext } from '../App'
import { kwlUsersPath, kwlSitesPath, loginPath } from '../utils/appPaths'
import { PermissionDataType } from '../types/permissionTypes'
import { collapseItems } from '../utils/constants'

type CollapseMenuType = {
  kwl: boolean,
  other: boolean,
}

export default () => {
  const [open, setOpen] = useState<CollapseMenuType>({ kwl: false, other: false })

  const { permissionList, userPermissionList } = useContext(MainContext)

  const pathname = getLocationProp('pathname')

  useEffect(() => {
    setOpen({ ...open, [getOpenedCollapse(pathname)]: true })
  }, [])

  const onClick = (val: string) => {
    setOpen({ ...open, [val]: !open[val as keyof CollapseMenuType] })
  }

  const getOpenedCollapse = (path: string) => {
    switch (path) {
      case loginPath:
      case kwlUsersPath:
      case kwlSitesPath:
        return collapseItems.KWL

      case '/other':
        return 'other'

      default: return ''
    }
  }

  // permissions definition
  const sidebarPermissionList = (collapseItem: string) => sidebarPermissions(permissionList, collapseItem) as PermissionDataType[]
  const isPermission = (collapseItem: string) => getPermissions(sidebarPermissionList(collapseItem), userPermissionList)

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

        {isPermission('other') && <MenuItem>
          <div className="item">
            <Collapse component="div" in={open.other} collapsedSize='35px'>
              <h4 onClick={() => onClick('other')}>
                Other
                {
                  open.other ?
                    <div className='item-expand'><ExpandLess /></div> : <div className='item-expand'><ExpandMore /></div>
                }
              </h4>
              <NavLink className='item-link' to='/other'>Other Page</NavLink>
            </Collapse>
          </div>
        </MenuItem>}
      </MenuList>}
    </div>
  )
}
