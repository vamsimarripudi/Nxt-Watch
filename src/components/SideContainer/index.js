import {Link} from 'react-router-dom'
import {FaHome, FaGamepad} from 'react-icons/fa'
import {BiTrendingUp} from 'react-icons/bi'
import {GiSaveArrow} from 'react-icons/gi'
import ThemeContext from '../../ContextLanguage'

import {
  SideDivContainer,
  TopCardContainer,
  BottomCardContainer,
  IconDivContainer,
  ContactTitle,
  BottomPara,
  SectionDiv,
} from './styledComponents'

const SideContainer = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const theme = isDark ? 'dark' : 'light'
      const color = isDark ? 'white' : 'black'
      return (
        <SideDivContainer theme={theme}>
          <TopCardContainer>
            <Link to="/" style={{textDecoration: 'none'}}>
              <SectionDiv style={{color: `${color}`}}>
                <FaHome size="25" style={{marginRight: '15px'}} />
                <p style={{color: `${color}`}}>Home</p>
              </SectionDiv>
            </Link>
            <Link to="/trending" style={{textDecoration: 'none', color: ''}}>
              <SectionDiv style={{color: `${color}`}}>
                <BiTrendingUp size="25" style={{marginRight: '15px'}} />
                <p style={{color: `${color}`}}>Trending</p>
              </SectionDiv>
            </Link>
            <Link to="/gaming" style={{textDecoration: 'none', color: ''}}>
              <SectionDiv style={{color: `${color}`}}>
                <FaGamepad size="25" style={{marginRight: '15px'}} />
                <p style={{color: `${color}`}}>Gaming</p>
              </SectionDiv>
            </Link>
            <Link
              to="/saved-videos"
              style={{textDecoration: 'none', color: ''}}
            >
              <SectionDiv style={{color: `${color}`}}>
                <GiSaveArrow size="25" style={{marginRight: '15px'}} />
                <p style={{color: `${color}`}}>Saved Videos</p>
              </SectionDiv>
            </Link>
          </TopCardContainer>
          <BottomCardContainer style={{color: `${color}`}} theme={theme}>
            <ContactTitle>Contact Us</ContactTitle>
            <IconDivContainer>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
                style={{height: '40px'}}
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
                style={{height: '40px', marginRight: '5px', marginLeft: '5px'}}
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
                style={{height: '40px'}}
              />
            </IconDivContainer>
            <BottomPara style={{color: `${color}`}}>
              Easy Now to see your channels and recommendations
            </BottomPara>
          </BottomCardContainer>
        </SideDivContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideContainer
