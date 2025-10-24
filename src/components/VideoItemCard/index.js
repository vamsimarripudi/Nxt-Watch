import {Link} from 'react-router-dom'

import {
  VideoItemContainer,
  VideoImage,
  BottomCard,
  BottomLeftCard,
  VideoTitle,
  BottomViewCard,
} from './styledComponents'

const VideoItemCard = props => {
  const {videoDetails} = props
  const {thumbnailUrl, viewCount, channel, publishedAt, title} = videoDetails
  const {name, profileImageUrl} = channel

  return (
    <>
      <Link to="/videos/id" style={{textDecoration: 'none'}}>
        <VideoItemContainer>
          <VideoImage src={thumbnailUrl} alt={name} />
          <BottomCard>
            <img src={profileImageUrl} alt={name} style={{height: '50px'}} />
            <BottomLeftCard>
              <VideoTitle>{title}</VideoTitle>
              <BottomViewCard>
                <p>{name} *</p>
                <p>{viewCount} views *</p>
                <p>{publishedAt}</p>
              </BottomViewCard>
            </BottomLeftCard>
          </BottomCard>
        </VideoItemContainer>
      </Link>
    </>
  )
}

export default VideoItemCard
