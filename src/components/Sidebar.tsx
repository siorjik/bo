import { useState, useEffect } from 'react'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import { NavLink } from 'react-router-dom'

import { getLocationProp } from '../helpers/history'

type CollapseMenuType = {
  main: boolean,
  other: boolean,
}

export default () => {
  const [open, setOpen] = useState<CollapseMenuType>({ main: false, other: false })

  const pathname = getLocationProp('pathname')

  useEffect(() => {
    setOpen({ ...open, [getOpenedCollapse(pathname)]: true })
  }, [])

  const onClick = (val: string) => {
    setOpen({ ...open, [val]: !open[val as keyof CollapseMenuType] })
  }

  const getOpenedCollapse = (path: string) => {
    switch (path) {
      case '/login':
      case '/main':
      case '/user':
        return 'main'
      case '/other':
        return 'other'   
      default: return ''
    }
  }

  return (
    <div className="sidebar">
      <MenuList>
        <MenuItem>
          <div className="item">
            <Collapse component="div" in={open.main} collapsedSize='35px'>
              <h4 onClick={() => onClick('main')}>
                Main
                {
                  open.main ?
                    <div className='item-expand'><ExpandLess /></div> : <div className='item-expand'><ExpandMore /></div>
                }
              </h4>
              <NavLink className='item-link' to='/main'>Main Page</NavLink>
              <NavLink className='item-link' to='/user'>User</NavLink>
            </Collapse>
          </div>
        </MenuItem>

        <MenuItem>
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
        </MenuItem>
      </MenuList>
    </div>
  )
}
