import {Link} from 'react-router-dom'
import {FaHome, FaGamepad, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {BiTrendingUp} from 'react-icons/bi'
import {GiSaveArrow} from 'react-icons/gi'
import {AiFillFacebook} from 'react-icons/ai'
import HomeVideo from '../HomeVideos'

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
      <Link to={<HomeVideo />} style={{textDecoration: 'none', color: ''}}>
        <SectionDiv>
          <FaHome size="25" style={{marginRight: '15px'}} />
          <p>Home</p>
        </SectionDiv>
      </Link>
      <SectionDiv>
        <BiTrendingUp size="25" style={{marginRight: '15px'}} />
        <p>Trending</p>
      </SectionDiv>
      <SectionDiv>
        <FaGamepad size="25" style={{marginRight: '15px'}} />
        <p>Gaming</p>
      </SectionDiv>
      <SectionDiv>
        <GiSaveArrow size="25" style={{marginRight: '15px'}} />
        <p>Saved Videos</p>
      </SectionDiv>
    </TopCardContainer>
    <BottomCardContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <IconDivContainer>
        <AiFillFacebook
          size="30"
          style={{color: 'blue', marginRight: '10px'}}
        />
        <FaTwitter size="30" style={{color: '#3b82f6', marginRight: '10px'}} />
        <FaLinkedin size="30" style={{color: ' #00306e'}} />
      </IconDivContainer>
      <BottomPara>Easy Now to see your channels and recommendations</BottomPara>
    </BottomCardContainer>
  </SideDivContainer>
)

export default SideContainer
