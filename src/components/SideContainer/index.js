import {Link} from 'react-router-dom'
import {FaHome, FaGamepad} from 'react-icons/fa'
import {BiTrendingUp} from 'react-icons/bi'
import {GiSaveArrow} from 'react-icons/gi'

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
  <SideDivContainer>
    <TopCardContainer>
      <Link to="/" style={{textDecoration: 'none', color: ''}}>
        <SectionDiv>
          <FaHome size="25" style={{marginRight: '15px'}} />
          <p>Home</p>
        </SectionDiv>
      </Link>
      <Link to="/trending" style={{textDecoration: 'none', color: ''}}>
        <SectionDiv>
          <BiTrendingUp size="25" style={{marginRight: '15px'}} />
          <p>Trending</p>
        </SectionDiv>
      </Link>
      <Link to="/gaming" style={{textDecoration: 'none', color: ''}}>
        <SectionDiv>
          <FaGamepad size="25" style={{marginRight: '15px'}} />
          <p>Gaming</p>
        </SectionDiv>
      </Link>
      <Link to="/saved-videos" style={{textDecoration: 'none', color: ''}}>
        <SectionDiv>
          <GiSaveArrow size="25" style={{marginRight: '15px'}} />
          <p>Saved Videos</p>
        </SectionDiv>
      </Link>
    </TopCardContainer>
    <BottomCardContainer>
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
      <BottomPara>Easy Now to see your channels and recommendations</BottomPara>
    </BottomCardContainer>
  </SideDivContainer>
)

export default SideContainer
