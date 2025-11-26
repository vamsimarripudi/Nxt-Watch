import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'
import {FiLogOut} from 'react-icons/fi'
import './index.css'
import {
  PopUpDivContainer,
  PopupCard,
  Buttons,
  CloseButton,
  CancelButton,
  LogoutButton,
  PopUpMobileContainer,
} from './styledComponents'

const styles = {
  backgroundColor: 'transparent',
}

const LogoutPopUp = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  const {isDark} = props
  const theme = isDark ? 'dark' : 'light'
  const color = isDark ? 'white' : 'black'
  return (
    <>
      <PopUpDivContainer>
        <Popup
          modal
          trigger={
            <LogoutButton type="button" color={color}>
              Logout
            </LogoutButton>
          }
          overlayStyle={styles}
        >
          {close => (
            <>
              <PopupCard theme={theme}>
                <p>Are you sure you want to logout?</p>

                <Buttons>
                  <CancelButton type="button" onClick={close}>
                    Cancel
                  </CancelButton>
                  <CloseButton type="button" onClick={onClickLogout}>
                    Confirm
                  </CloseButton>
                </Buttons>
              </PopupCard>
            </>
          )}
        </Popup>
      </PopUpDivContainer>
      <PopUpMobileContainer>
        <Popup
          modal
          trigger={
            <button
              type="button"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: `${color}`,
              }}
            >
              <FiLogOut size="20" />
            </button>
          }
          overlayStyle={styles}
        >
          {close => (
            <>
              <PopupCard>
                <p>Are you sure you want to logout?</p>

                <Buttons>
                  <CancelButton type="button" onClick={close}>
                    Cancel
                  </CancelButton>
                  <CloseButton type="button" onClick={onClickLogout}>
                    Confirm
                  </CloseButton>
                </Buttons>
              </PopupCard>
            </>
          )}
        </Popup>
      </PopUpMobileContainer>
    </>
  )
}

export default LogoutPopUp
