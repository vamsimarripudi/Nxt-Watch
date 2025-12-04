import {Component} from 'react'
import './index.css'

class NxtWatchBanner extends Component {
  state = {isVisible: true}

  setVisibility = () => {
    this.setState({isVisible: false})
  }

  render() {
    const {isVisible} = this.state
    if (!isVisible) return null
    return (
      <div className="banner-card">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'end',
          }}
        >
          <button
            type="button"
            style={{
              marginBottom: '20px',
              backgroundColor: 'transparent',
              borderWidth: '0px',
              fontSize: '20px',
              color: 'grey',
              cursor: 'pointer',
            }}
            onClick={this.setVisibility}
            data-testid="close"
          >
            x
          </button>
        </div>
        <div data-testid="banner">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
            className="banner-logo"
          />
          <p className="title">Buy Nxt Watch Premium</p>
          <button type="button" className="button">
            GET IT NOW
          </button>
        </div>
      </div>
    )
  }
}

export default NxtWatchBanner
