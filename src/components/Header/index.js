import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {
  NavBar,
  NxtWatchImage,
  ProfileImage,
  LogoutDivContainer,
  LogoutButton,
} from './styledComponents'

const Header = props => {
  const onClickLogoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NavBar>
      <Link to="/">
        <NxtWatchImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="logo"
        />
      </Link>
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
    </NavBar>
  )
}

export default withRouter(Header)
