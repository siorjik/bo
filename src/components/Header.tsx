import { Link } from 'react-router-dom'
import { MenuRounded } from '@mui/icons-material'

export default ({ menuToggle, isMobileView }: { menuToggle: () => {}, isMobileView: boolean }) => {
  return (
    <header>
      {isMobileView && <div className='hamburger' onClick={menuToggle}><MenuRounded /></div>}
      <div className="logo">Logo</div>
      <div className="user"><Link to='user'>user</Link></div>
    </header>
  )
}
