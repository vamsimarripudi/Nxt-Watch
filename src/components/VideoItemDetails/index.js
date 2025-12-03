import {Component} from 'react'

import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddFill} from 'react-icons/ri'
import Cookies from 'js-cookie'
import ThemeContext from '../../ContextLanguage'
import SideContainer from '../SideContainer'
import Header from '../Header'
import {
  VideoDivContainer,
  DivContainer,
  VideoContainer,
  VideoDetailsContainer,
  BottomCardContainer,
  VideoTitle,
  Button,
} from './styledComponents'

import './index.css'

const apiStatusConstructor = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstructor.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetailsById()
  }

  getVideoDetailsById = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatus: apiStatusConstructor.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const res = await fetch(apiUrl, options)

    if (res.ok === true) {
      const videoData = await res.json()
      const video = videoData.video_details
      const fetchedData = {
        id: video.id,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
          subscriberCount: video.channel.subscriber_count,
        },
        title: video.title,
        description: video.description,
        publishedAt: video.published_at,

        videoUrl: video.video_url,
        viewCount: video.view_count,
      }

      this.setState({
        apiStatus: apiStatusConstructor.success,
        videoDetails: fetchedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstructor.failure})
    }
  }

  updatedLikeButton = () =>
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))

  updatedDisLikeButton = () =>
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))

  renderViewOfVideo = () => {
    const {videoDetails, isDisliked, isLiked} = this.state
    const {
      title,
      description,
      videoUrl,
      viewCount,
      publishedAt,
      id,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = videoDetails.channel

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, updateSave, savedVideosList} = value
          const theme = isDark ? 'dark' : 'light'
          const color = isDark ? '#f4f4f4' : '#121212'
          const likeIsActive = isLiked ? 'active' : 'not-active'
          const dislikeIsActive = isDisliked ? 'active' : 'not-active'
          const present = (savedVideosList || []).find(each => each.id === id)
          const saveIsActive = present !== undefined ? 'active' : 'not-active'
          const saveText = present !== undefined ? 'Saved' : 'Save'

          return (
            <VideoDetailsContainer theme={theme}>
              <VideoContainer>
                <ReactPlayer
                  url={videoUrl}
                  width="100%"
                  height="100%"
                  controls
                />
              </VideoContainer>
              <BottomCardContainer>
                <VideoTitle
                  color={color}
                  style={{padding: '10px', marginLeft: '10px'}}
                >
                  {title}
                </VideoTitle>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{display: 'flex'}}>
                      <p
                        style={{
                          color: `${color}`,
                          padding: '10px',
                          marginLeft: '10px',
                        }}
                      >
                        {viewCount} views
                      </p>
                      <p
                        style={{
                          color: `${color}`,
                          padding: '10px',
                          marginLeft: '10px',
                        }}
                      >
                        {publishedAt} ago
                      </p>
                    </div>

                    <div style={{display: 'flex'}}>
                      <Button
                        theme={likeIsActive}
                        type="button"
                        onClick={this.updatedLikeButton}
                      >
                        <BiLike /> Like
                      </Button>
                      <Button
                        type="button"
                        theme={dislikeIsActive}
                        onClick={this.updatedDisLikeButton}
                      >
                        <BiDislike /> Dislike
                      </Button>
                      <Button
                        type="button"
                        theme={saveIsActive}
                        onClick={() => updateSave(videoDetails)}
                      >
                        <RiMenuAddFill /> {saveText}
                      </Button>
                    </div>
                  </div>
                  <hr style={{width: '100%'}} />
                  <div style={{display: 'flex'}}>
                    <img
                      src={profileImageUrl}
                      alt="channel logo"
                      style={{height: '50px', marginLeft: '10px'}}
                    />
                    <div>
                      <p style={{color: `${color}`, marginLeft: '10px'}}>
                        {name}
                      </p>
                      <p style={{color: `${color}`, marginLeft: '10px'}}>
                        {subscriberCount} subscribers
                      </p>
                    </div>
                  </div>
                  <div>
                    <p style={{color: `${color}`, marginLeft: '10px'}}>
                      {description}
                    </p>
                  </div>
                </div>
              </BottomCardContainer>
            </VideoDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  onRetryButton = () => this.getVideoDetailsById()

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const theme = isDark ? '#121212' : 'f4f4f4'
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
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="banner"
            />
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

  renderFinalView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstructor.inProgress:
        return this.renderLoadingView()
      case apiStatusConstructor.success:
        return this.renderViewOfVideo()
      case apiStatusConstructor.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const theme = isDark ? 'dark' : 'light'
          const color = isDark ? 'white' : 'black'

          return (
            <>
              <Header />
              <DivContainer theme={theme} color={color}>
                <SideContainer />
                <VideoDivContainer theme={theme} color={color}>
                  {this.renderFinalView()}
                </VideoDivContainer>
              </DivContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
