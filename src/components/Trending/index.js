import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa6'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideContainer from '../SideContainer'
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
  state = {trendingVideoDetails: [], apistatus: apiStatusConstructor.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apistatus: apiStatusConstructor.inProgress})
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
        apistatus: apiStatusConstructor.success,
        trendingVideoDetails: updatedTrendingVideo,
      })
    } else {
      this.setState({apistatus: apiStatusConstructor.failure})
    }
  }

  renderTrendingVideoView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const {trendingVideoDetails} = this.state
        const theme = isDark ? '#121212' : '#f4f4f4'
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
              <FaFire style={{color: 'red'}} /> Trending
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="banner"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble to complete your request. Please try again.
      </p>
      <button type="button" onClick={this.onRetryButton}>
        Retry
      </button>
    </div>
  )

  renderFinalView = () => {
    const {apistatus} = this.state

    switch (apistatus) {
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
        <div style={{display: 'flex'}}>
          <SideContainer />

          {this.renderFinalView()}
        </div>
      </>
    )
  }
}

export default Trending
