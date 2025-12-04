import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiFillFire} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoItemCard from '../VideoItemCard'
import ThemeContext from '../../ContextLanguage'

import {VideosUnOrderList, TrendingTitle} from './styledComponents'

const apiStatusConstructor = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {trendingVideoDetails: [], apiStatus: apiStatusConstructor.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstructor.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const res = await fetch(apiUrl, options)

    if (res.ok === true) {
      const data = await res.json()

      const fetchedData = data.videos

      const updatedTrendingVideo = fetchedData.map(eachVideo => ({
        id: eachVideo.id,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        thumbnailUrl: eachVideo.thumbnail_url,
        publishedAt: eachVideo.published_at,
      }))

      this.setState({
        apiStatus: apiStatusConstructor.success,
        trendingVideoDetails: updatedTrendingVideo,
      })
    } else {
      this.setState({apiStatus: apiStatusConstructor.failure})
    }
  }

  renderTrendingVideoView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const {trendingVideoDetails} = this.state
        const theme = isDark ? '#0f0f0f' : '#f9f9f9'
        const color = isDark ? 'white' : 'black'

        return (
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
            <TrendingTitle color={color}>
              <AiFillFire style={{color: 'red'}} /> Trending
            </TrendingTitle>
            <VideosUnOrderList theme={theme}>
              {trendingVideoDetails.map(each => (
                <VideoItemCard key={each.id} videoDetails={each} />
              ))}
            </VideosUnOrderList>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )

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

  onRetryButton = () => this.getTrendingVideos()

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

  renderFinalView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstructor.inProgress:
        return this.renderLoadingView()
      case apiStatusConstructor.failure:
        return this.renderFailureView()
      case apiStatusConstructor.success:
        return this.renderTrendingVideoView()

      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div style={{display: 'flex'}} data-testid="trending">
          <Sidebar />

          {this.renderFinalView()}
        </div>
      </>
    )
  }
}

export default Trending
