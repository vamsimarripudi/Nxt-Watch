import {Component} from 'react'
import Header from '../Header'
import SideContainer from '../SideContainer'

class SavedVideos extends Component {
  state = {}

  render() {
    return (
      <>
        <Header />
        <div style={{display: 'flex'}}>
          <SideContainer />
          <h1>SavedVideos Page</h1>
        </div>
      </>
    )
  }
}

export default SavedVideos
