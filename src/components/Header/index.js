import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'
import {MdDarkMode} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'

import {
  NavBar,
  NxtWatchImage,
  ProfileImage,
  LogoutDivContainer,
  LogoutButton,
  LogoutMobileContainer,
  NavBarDesktopVersion,
  IconDivContainer,
} from './styledComponents'

const Header = props => {
  const onClickLogoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NavBar>
      <NavBarDesktopVersion>
        <div>
          <Link to="/">
            <NxtWatchImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="logo"
            />
          </Link>
        </div>
        <LogoutDivContainer>
          <HiOutlineLightBulb size="32" cursor="pointer" />
          <ProfileImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
          <LogoutButton type="button" onClick={onClickLogoutButton}>
            Logout
          </LogoutButton>
        </LogoutDivContainer>
      </NavBarDesktopVersion>
      <LogoutMobileContainer>
        <div>
          <Link to="/">
            <NxtWatchImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="logo"
            />
          </Link>
        </div>
        <IconDivContainer>
          <MdDarkMode />
          <GiHamburgerMenu />
          <FiLogOut />
        </IconDivContainer>
      </LogoutMobileContainer>
    </NavBar>
  )
}

export default withRouter(Header)
