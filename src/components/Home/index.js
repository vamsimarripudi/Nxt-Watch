import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import HomeVideo from '../HomeVideos'
import SideContainer from '../SideContainer'
import {DivContainer} from './styledComponents'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <DivContainer>
        <SideContainer />
        <HomeVideo />
      </DivContainer>
    </>
  )
}
export default Home
