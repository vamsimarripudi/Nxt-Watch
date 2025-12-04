import {Component} from 'react'
import ThemeContext from '../../ContextLanguage'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {NotFoundImage} from './styledComponents'

class NotFound extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const theme = isDark ? '#212121' : '#f4f4f4'
          const color = isDark ? 'white' : 'black'
          const notFoundImage = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          return (
            <>
              <Header />
              <div style={{display: 'flex'}}>
                <Sidebar />
                <div
                  style={{
                    backgroundColor: `${theme}`,
                    height: '100vh',
                    width: '80%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                  }}
                >
                  <NotFoundImage src={notFoundImage} alt="not found" />
                  <h1 style={{color: `${color}`}}>Page Not Found</h1>
                  <p style={{color: `${color}`}}>
                    We are sorry, the page you requested could not be found.
                  </p>
                </div>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFound
