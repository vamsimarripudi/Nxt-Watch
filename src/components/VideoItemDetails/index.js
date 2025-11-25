import {Component} from 'react'

import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddFill} from 'react-icons/ri'
import Cookies from 'js-cookie'
import SideContainer from '../SideContainer'
import Header from '../Header'
import {
  VideoDivContainer,
  DivContainer,
  VideoViewPara,
  PublishedTime,
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
    savedLater: [],
    isSaved: false,
    isLiked: false,
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

  renderViewOfVideo = () => {
    const {videoDetails} = this.state
    const {title, description, videoUrl, viewCount, publishedAt} = videoDetails
    const {name, profileImageUrl, subscriberCount} = videoDetails.channel

    const {isSaved} = this.state

    return (
      <div className="video-player-card">
        <div className="video-wrapper">
          <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
        </div>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <p style={{margin: '10px'}}>{title}</p>
          <div style={{display: 'flex'}} className="likes-save-card">
            <div style={{display: 'flex'}} className="likes-card">
              <VideoViewPara>{viewCount} views</VideoViewPara>
              <PublishedTime>{publishedAt} ago</PublishedTime>
            </div>
            <div className="save-card">
              <div className="like-card">
                <BiLike />
                <p>Like</p>
              </div>
              <div className="dislike-card">
                <BiDislike />
                <p>Dislike</p>
              </div>
              <div className="saved-card">
                <RiMenuAddFill />
                {isSaved ? 'saved' : 'save'}
              </div>
            </div>
          </div>
        </div>
        <hr
          style={{
            width: '100%',
            height: '2px',
            color: 'gray',
            marginTop: '15px',
            marginBottom: '15px',
          }}
        />
        <div className="bottom-card">
          <div style={{display: 'flex'}}>
            <div>
              <img src={profileImageUrl} alt={name} style={{height: '50px'}} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <p>{name}</p>
              <p>{subscriberCount} subscribers</p>
            </div>
          </div>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }

  onRetryButton = () => this.getVideoDetailsById()

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
      <>
        <Header />
        <DivContainer>
          <SideContainer />
          <VideoDivContainer>{this.renderFinalView()}</VideoDivContainer>
        </DivContainer>
      </>
    )
  }
}

export default VideoItemDetails
