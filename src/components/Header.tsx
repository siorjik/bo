import { Link } from 'react-router-dom'
import { MenuRounded } from '@mui/icons-material'
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'

import logo from '../assets/images/logo.svg'
import { loginPath, profilePath } from '../utils/appPaths'
import { goTo } from '../helpers/history'

export default ({ menuToggle, isMobileView }: { menuToggle?: () => {}, isMobileView?: boolean }) => {
  const handleClick = () => {
    window.localStorage.removeItem('tokens')
    window.location.href = loginPath
  }

  return (
    <header>
      {isMobileView && <div className='hamburger' onClick={menuToggle}><MenuRounded /></div>}
      <div className="logo" onClick={() => goTo('/')}><img src={logo} alt='logo' /></div>
      <div className="user">
        <Link to={profilePath}><ManageAccountsRoundedIcon className='icon' /></Link>
        <span onClick={handleClick}><LogoutRoundedIcon className='icon' /></span>
      </div>
    </header>
  )
}
