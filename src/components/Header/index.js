import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'

import {FiSun} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'

import LogoutPopUp from '../LogoutPopUp'
import MenuListPopup from '../MenuListPopUp'
import ThemeContext from '../../ContextLanguage'

import {
  NavBar,
  NxtWatchImage,
  ProfileImage,
  LogoutDivContainer,
  LogoutMobileContainer,
  NavBarDesktopVersion,
  IconDivContainer,
  IconButton,
} from './styledComponents'

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, changeTheme} = value
          const {history} = this.props

          const websiteLogo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const theme = isDark ? 'dark' : 'light'
          const color = isDark ? 'white' : 'black'

          return (
            <NavBar theme={theme}>
              <NavBarDesktopVersion>
                <div>
                  <Link to="/">
                    <NxtWatchImage src={websiteLogo} alt="website-logo" />
                  </Link>
                </div>
                <LogoutDivContainer>
                  <IconButton
                    type="button"
                    data-testid="theme"
                    onClick={() => changeTheme()}
                  >
                    {isDark ? (
                      <FiSun color={color} size={22} />
                    ) : (
                      <FaMoon size={22} />
                    )}
                  </IconButton>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <LogoutPopUp history={history} />
                </LogoutDivContainer>
              </NavBarDesktopVersion>
              <LogoutMobileContainer theme={theme}>
                <div>
                  <Link to="/">
                    <NxtWatchImage src={websiteLogo} alt="logo" />
                  </Link>
                </div>
                <IconDivContainer>
                  <IconButton
                    type="button"
                    data-testid="theme"
                    onClick={() => changeTheme()}
                  >
                    {isDark ? (
                      <FiSun color={color} size={22} />
                    ) : (
                      <FaMoon size={22} />
                    )}
                  </IconButton>
                  <MenuListPopup isDark={isDark} />
                  <LogoutPopUp isDark={isDark} />
                </IconDivContainer>
              </LogoutMobileContainer>
            </NavBar>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
