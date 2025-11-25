import {Component} from 'react'
import {FaSearch} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import VideoItemCard from '../VideoItemCard'
import NxtWatchBanner from '../NxtWatchBanner'

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
      data-testid="loader"
    >
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </div>
  )

  onRetryButton = () => this.getHomeVideosApi()

  renderVideosView = () => {
    const {videosList} = this.state
    const hasVideos = videosList.length !== 0

    return (
      <div>
        {hasVideos ? (
          <VideosUnOrderList>
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
            }}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
              style={{height: '300px', width: '300px'}}
            />
            <h1>No Search Results Found</h1>
            <p>Try different keywords or remove the search filter.</p>
          </div>
        )}
      </div>
    )
  }

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
        className=""
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are having some trouble completing your request.Please try again</p>
      <button type="button" onClick={this.onRetryButton}>
        Retry
      </button>
    </div>
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
          />
          <SearchIcon>
            <FaSearch
              size="19"
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
