import {RiMenuAddLine} from 'react-icons/ri'

import Header from '../Header'
import Sidebar from '../Sidebar'
import SavedVideoItemCard from '../SavedVideoItemCard'
import {
  MainBody,
  SavedVideosMainContainer,
  SavedVideosContainer,
  SavedMenuContainer,
  IconContainer,
  MenuHeading,
  VideosList,
  NoVideosContainer,
  NoVideosImg,
  FailureText,
} from './styledComponents'

import ThemeContext from '../../ContextLanguage'

const SavedVideos = () => {
  const savedList = () => (
    <ThemeContext.Consumer>
      {value => {
        const {savedVideosList, isDark} = value
        const theme = isDark ? 'dark' : 'light'
        if (savedVideosList.length === 0) {
          return (
            <NoVideosContainer theme={theme}>
              <NoVideosImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                alt="no saved videos"
              />

              <FailureText theme={theme} as="h1">
                No saved videos found
              </FailureText>
              <FailureText theme={theme} as="p">
                You can save your videos while watching them
              </FailureText>
            </NoVideosContainer>
          )
        }
        return (
          <VideosList>
            {savedVideosList.map(each => (
              <SavedVideoItemCard videoDetails={each} key={each.id} />
            ))}
          </VideosList>
        )
      }}
    </ThemeContext.Consumer>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const theme = isDark ? 'dark' : 'light'
        return (
          <SavedVideosMainContainer data-testid="savedVideos" theme={theme}>
            <Header />
            <MainBody>
              <Sidebar />
              <SavedVideosContainer>
                <SavedMenuContainer theme={theme}>
                  <IconContainer theme={theme}>
                    <RiMenuAddLine size={40} color="#ff0b37" />
                  </IconContainer>
                  <MenuHeading theme={theme}>Saved Videos</MenuHeading>
                </SavedMenuContainer>
                {savedList()}
              </SavedVideosContainer>
            </MainBody>
          </SavedVideosMainContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
