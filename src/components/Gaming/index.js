import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaGamepad} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideContainer from '../SideContainer'
import ThemeContext from '../../ContextLanguage'
import {
  VideosUnOrderList,
  GamingTitle,
  VideoItemContainer,
  GameVideoImage,
  GamingCardTitle,
  GamingViewCount,
} from './styledComponents'

const apiStatusConstructor = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstructor.initial, gamingVideos: []}

  componentDidMount() {
    this.getGamingVideo()
  }

  getGamingVideo = async () => {
    this.setState({apiStatus: apiStatusConstructor.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const res = await fetch(apiUrl, options)

    if (res.ok === true) {
      const data = await res.json()
      console.log(data)
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstructor.success,
        gamingVideos: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstructor.failure})
    }
  }

  renderLoadingView = () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}
      data-testid="loader"
    >
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </div>
  )

  onRetryButton = () => this.getGamingVideo()

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const theme = isDark ? '#0f0f0f' : '#f9f9f9'
        const failureView = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
              backgroundColor: `${theme}`,
            }}
          >
            <img src={failureView} alt="failure view" />
            <h1 style={{color: `${theme}`}}>Oops! Something Went Wrong</h1>
            <p style={{color: `${theme}`}}>
              We are having some trouble to complete your request. Please try
              again.
            </p>
            <button
              type="button"
              onClick={this.onRetryButton}
              style={{color: `${theme}`, backgroundColor: `${theme}`}}
            >
              Retry
            </button>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderGamingVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const {gamingVideos} = this.state
        const theme = isDark ? '#0f0f0f' : '#f9f9f9'
        const color = isDark ? 'white' : 'black'

        return (
          <>
            <div
              style={{
                height: '100vh',
                overflow: 'auto',
                width: '100vw',
                flexWrap: 'wrap',
                scrollbarWidth: 'none',
                backgroundColor: `${theme}`,
              }}
            >
              <div style={{display: 'flex', alignItems: 'center'}}>
                <FaGamepad
                  size="50"
                  style={{margin: '10px', color: 'red', marginLeft: '50px'}}
                />
                <GamingTitle color={color}>Gaming</GamingTitle>
              </div>
              <VideosUnOrderList>
                {gamingVideos.map(each => (
                  <Link
                    to={`/videos/${each.id}`}
                    style={{textDecoration: 'none'}}
                  >
                    <VideoItemContainer
                      key={each.id}
                      theme={theme}
                      color={color}
                    >
                      <GameVideoImage
                        src={each.thumbnailUrl}
                        alt={each.title}
                      />
                      <GamingCardTitle color={color}>
                        {each.title}
                      </GamingCardTitle>
                      <GamingViewCount color={color}>
                        {each.viewCount} Watching Worldwide
                      </GamingViewCount>
                    </VideoItemContainer>
                  </Link>
                ))}
              </VideosUnOrderList>
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderFinalView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstructor.inProgress:
        return this.renderLoadingView()
      case apiStatusConstructor.failure:
        return this.renderFailureView()
      case apiStatusConstructor.success:
        return this.renderGamingVideos()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div style={{display: 'flex'}} data-testid="gaming">
          <SideContainer />
          {this.renderFinalView()}
        </div>
      </>
    )
  }
}

export default Gaming
