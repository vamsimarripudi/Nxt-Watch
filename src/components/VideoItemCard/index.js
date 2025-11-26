import {Link} from 'react-router-dom'

import {
  VideoItemContainer,
  VideoImage,
  BottomCard,
  BottomLeftCard,
  VideoTitle,
  BottomViewCard,
  ProfileImage,
  NameTag,
  PublishedTag,
  ViewCount,
} from './styledComponents'

const VideoItemCard = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    viewCount,
    channel,
    publishedAt,
    title,
    id,
  } = videoDetails
  const {name, profileImageUrl} = channel

  return (
    <>
      <Link to={`videos/${id}`} style={{textDecoration: 'none'}}>
        <VideoItemContainer>
          <VideoImage src={thumbnailUrl} alt={name} />
          <BottomCard>
            <ProfileImage src={profileImageUrl} alt={name} />
            <BottomLeftCard>
              <VideoTitle>{title}</VideoTitle>
              <BottomViewCard>
                <NameTag>{name} *</NameTag>
                <ViewCount>{viewCount} views *</ViewCount>
                <PublishedTag>{publishedAt}</PublishedTag>
              </BottomViewCard>
            </BottomLeftCard>
          </BottomCard>
        </VideoItemContainer>
      </Link>
    </>
  )
}

export default VideoItemCard
