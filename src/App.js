// Replace your code here
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import ThemeContext from './ContextLanguage'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, save: false, savedVideosList: []}

  changeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  addVideosToSavedVideos = videoDetails => {
    this.setState(prev => ({
      savedVideosList: [...(prev.savedVideosList || []), videoDetails],
    }))
  }

  deleteVideosFromSavedVideos = videoDetails => {
    const {savedVideosList} = this.state
    const updatedList = savedVideosList.filter(
      each => each.id !== videoDetails.id,
    )
    this.setState({savedVideosList: updatedList})
  }

  updateSaveVideosList = videoDetails => {
    const {save} = this.state
    if (save) {
      this.deleteVideosFromSavedVideos(videoDetails)
    } else {
      this.addVideosToSavedVideos(videoDetails)
    }
  }

  updateSave = videoDetails => {
    this.setState(
      prev => ({save: !prev.save}),
      this.updateSaveVideosList(videoDetails),
    )
  }

  render() {
    const {isDark, save, savedVideosList} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          save,
          savedVideosList,
          addVideosToSavedVideos: this.addVideosToSavedVideos,
          deleteVideosFromSavedVideos: this.deleteVideosFromSavedVideos,
          updateSave: this.updateSave,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
