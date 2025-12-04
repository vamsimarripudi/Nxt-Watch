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
          data-testid="banner"
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
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
            className="banner-logo"
          />
          <h1 className="title">
            Buy Nxt Watch Premium prepaid plans with UPI
          </h1>
          <button type="button" className="button">
            GET IT NOW
          </button>
        </div>
      </div>
    )
  }
}

export default NxtWatchBanner
