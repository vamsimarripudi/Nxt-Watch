import {Link} from 'react-router-dom'
import ThemeContext from '../../ContextLanguage'

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

const VideoItemCard = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const color = isDark ? 'white' : 'black'
      const theme = isDark ? 'dark' : 'light'
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
            <VideoItemContainer theme={theme}>
              <VideoImage src={thumbnailUrl} alt={name} />
              <BottomCard>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <BottomLeftCard>
                  <VideoTitle style={{color: `${color}`}}>{title}</VideoTitle>
                  <BottomViewCard>
                    <NameTag style={{color: `${color}`}}>{name} *</NameTag>
                    <ViewCount style={{color: `${color}`}}>
                      {viewCount} views *
                    </ViewCount>
                    <PublishedTag style={{color: `${color}`}}>
                      {publishedAt}
                    </PublishedTag>
                  </BottomViewCard>
                </BottomLeftCard>
              </BottomCard>
            </VideoItemContainer>
          </Link>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default VideoItemCard
