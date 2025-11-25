import {withRouter, Link} from 'react-router-dom'

import {HiOutlineLightBulb} from 'react-icons/hi'

import {MdDarkMode} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import LogoutPopUp from '../LogoutPopUp'

import {
  NavBar,
  NxtWatchImage,
  ProfileImage,
  LogoutDivContainer,
  LogoutMobileContainer,
  NavBarDesktopVersion,
  IconDivContainer,
} from './styledComponents'

const Header = props => {
  const {history} = props

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
          <HiOutlineLightBulb size="30" cursor="pointer" />
          <ProfileImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />

          <LogoutPopUp history={history} />
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
          <MdDarkMode size="20" style={{marginRight: '10px'}} />
          <GiHamburgerMenu size="20" style={{marginRight: '10px'}} />
          <LogoutPopUp />
        </IconDivContainer>
      </LogoutMobileContainer>
    </NavBar>
  )
}

export default withRouter(Header)
