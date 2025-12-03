import {Component} from 'react'
import {FaSearch} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import VideoItemCard from '../VideoItemCard'
import NxtWatchBanner from '../NxtWatchBanner'
import ThemeContext from '../../ContextLanguage'

import {
  DivContainer,
  VideosUnOrderList,
  SearchInput,
  SearchInputDiv,
  SearchIcon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeVideo extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getHomeVideosApi()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getFetchedDataIntoJson = each => ({
    id: each.id,
    channel: {
      name: each.channel.name,
      profileImageUrl: each.channel.profile_image_url,
    },
    publishedAt: each.published_at,
    title: each.title,
    viewCount: each.view_count,
    thumbnailUrl: each.thumbnail_url,
  })

  getHomeVideosApi = async (searchInput = '') => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()

      const fetchedData = data.videos.map(each =>
        this.getFetchedDataIntoJson(each),
      )

      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: fetchedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onSearch = () => {
    const {searchInput} = this.state
    this.getHomeVideosApi(searchInput)
  }

  onKey = e => {
    if (e.key.toLowerCase() === 'enter') {
      this.onSearch()
    }
  }

  renderLoadingView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const theme = isDark ? 'dark' : 'light'
        const color = isDark ? 'white' : 'blue'

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
            data-testid="loader"
          >
            <Loader
              type="ThreeDots"
              color={`${color}`}
              height="50"
              width="50"
            />
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )

  onRetryButton = () => this.getHomeVideosApi()

  renderVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const {videosList} = this.state
        const hasVideos = videosList.length !== 0
        const theme = isDark ? 'dark' : 'white'
        const themeColor = isDark ? '#121212' : '#f4f4f4'
        const color = isDark ? 'white' : 'black'

        return (
          <div>
            {hasVideos ? (
              <VideosUnOrderList theme={theme}>
                {videosList.map(eachItem => (
                  <VideoItemCard key={eachItem.id} videoDetails={eachItem} />
                ))}
              </VideosUnOrderList>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100vh',
                  backgroundColor: `${themeColor}`,
                }}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                  style={{
                    height: '300px',
                    width: '300px',
                    backgroundColor: `${themeColor}`,
                  }}
                />
                <h1 style={{color: `${color}`}}>No Search Results Found</h1>
                <p style={{color: `${color}`}}>
                  Try different keywords or remove the search filter.
                </p>
              </div>
            )}
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )

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
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderVideosView()

      default:
        return apiStatusConstants.initial
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <DivContainer>
        <NxtWatchBanner />
        <SearchInputDiv>
          <SearchInput
            type="search"
            fixed
            value={searchInput}
            onChange={this.onChangeSearchInput}
            placeholder="Search"
            onKeyDown={this.onKey}
            data-testid="searchButton"
          />
          <SearchIcon>
            <FaSearch
              size="15"
              style={{
                marginLeft: '5px',
                borderRadius: '1px',
                borderWidth: '1px solid red',
              }}
              onClick={this.onSearch}
            />
          </SearchIcon>
        </SearchInputDiv>
        {this.renderFinalView()}
      </DivContainer>
    )
  }
}

export default HomeVideo
