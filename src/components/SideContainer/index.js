import {
  SideDivContainer,
  TopCardContainer,
  BottomCardContainer,
} from './styledComponents'

const SideContainer = () => (
  <SideDivContainer>
    <TopCardContainer>
      <p>Home</p>
      <p>Trending</p>
      <p>Gaming Videos</p>
      <p>Saved Videos</p>
    </TopCardContainer>
    <BottomCardContainer>
      <h1>Contact Us</h1>
    </BottomCardContainer>
  </SideDivContainer>
)

export default SideContainer
