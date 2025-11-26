import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {FaHome, FaGamepad} from 'react-icons/fa'
import {BiTrendingUp} from 'react-icons/bi'
import {GiSaveArrow} from 'react-icons/gi'
import {RxHamburgerMenu} from 'react-icons/rx'
import './index.css'
import {PopUpDivContainer, PopupCard, SectionDiv} from './styledComponents'

const MenuListPopup = props => {
  const {isDark} = props
  const color = isDark ? 'white' : 'black'

  return (
    <PopUpDivContainer>
      <Popup
        modal
        trigger={
          <button
            type="button"
            style={{
              backgroundColor: 'transparent',
              border: '0px',
              fontSize: '22px',
            }}
          >
            <RxHamburgerMenu style={{color: `${color}`}} />
          </button>
        }
      >
        {close => (
          <>
            <PopupCard>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <button
                  type="button"
                  onClick={close}
                  style={{
                    backgroundColor: 'transparent',
                    border: '0px',
                    fontWeight: 'bold',
                    fontSize: '18px',
                  }}
                >
                  x
                </button>
              </div>
              <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                <SectionDiv>
                  <FaHome size="25" style={{marginRight: '15px'}} />
                  <p>Home</p>
                </SectionDiv>
              </Link>
              <Link
                to="/trending"
                style={{textDecoration: 'none', color: 'black'}}
              >
                <SectionDiv>
                  <BiTrendingUp size="25" style={{marginRight: '15px'}} />
                  <p>Trending</p>
                </SectionDiv>
              </Link>
              <Link
                to="/gaming"
                style={{textDecoration: 'none', color: 'black'}}
              >
                <SectionDiv>
                  <FaGamepad size="25" style={{marginRight: '15px'}} />
                  <p>Gaming</p>
                </SectionDiv>
              </Link>
              <Link
                to="/saved-videos"
                style={{textDecoration: 'none', color: 'black'}}
              >
                <SectionDiv>
                  <GiSaveArrow size="25" style={{marginRight: '15px'}} />
                  <p>Saved Videos</p>
                </SectionDiv>
              </Link>
            </PopupCard>
          </>
        )}
      </Popup>
    </PopUpDivContainer>
  )
}

export default MenuListPopup
