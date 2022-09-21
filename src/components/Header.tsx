import { Link } from 'react-router-dom'

const Header = ({ menuToggle, isMobileView }: { menuToggle: () => {}, isMobileView: boolean }) => {
  return (
    <header>
      {isMobileView && <div className='hamburger'><button onClick={menuToggle}>Menu</button></div>}
      <div className="logo">Logo</div>
      <div className="user"><Link to='user'>user</Link></div>
    </header>
  )
}

export default Header
