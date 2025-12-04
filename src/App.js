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

class App extends Component {
  state = {isDark: false, savedVideosList: []}

  changeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  updateSave = videoDetails => {
    const {savedVideosList} = this.state
    const isAlreadySaved = savedVideosList.find(
      each => each.id === videoDetails.id,
    )

    if (isAlreadySaved) {
      // If already saved, remove it
      this.setState(prevState => ({
        savedVideosList: prevState.savedVideosList.filter(
          each => each.id !== videoDetails.id,
        ),
      }))
    } else {
      // If not saved, add it
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoDetails],
      }))
    }
  }

  render() {
    const {isDark, savedVideosList} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          savedVideosList,
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
