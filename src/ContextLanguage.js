import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  save: false,
  savedVideosList: [],
  addVideosToSavedVideos: () => {},
  deleteVideosFromSavedVideos: () => {},
  updateSave: () => {},
})

export default ThemeContext
