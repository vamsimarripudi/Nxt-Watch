import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import HomeVideo from '../HomeVideos'
import SideContainer from '../SideContainer'
import {DivContainer} from './styledComponents'
import ThemeContext from '../../ContextLanguage'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const theme = isDark ? 'dark' : 'light'
      const jwtToken = Cookies.get('jwt_token')
      if (jwtToken === undefined) {
        return <Redirect to="/login" />
      }
      return (
        <>
          <Header />
          <DivContainer theme={theme} data-testid="home">
            <SideContainer />
            <HomeVideo />
          </DivContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
