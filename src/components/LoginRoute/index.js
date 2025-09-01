import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginDivContainer,
  LoginContainer,
  NxtWatchImage,
  Label,
  UserInput,
  LoginForm,
  CheckBoxDivContainer,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onUserNameChangeEvent = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChangeEvent = event => {
    this.setState({password: event.target.value})
  }

  onToggleChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    return (
      <>
        <Label className="label-heading" htmlFor="password">
          PASSWORD
        </Label>
        <br />
        <UserInput
          placeholder="Password"
          className="password-input-field"
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={this.onPasswordChangeEvent}
        />

        <CheckBoxDivContainer>
          <input
            type="checkbox"
            id="showPassword"
            onChange={this.onToggleChangeShowPassword}
            checked={showPassword}
          />
          <Label htmlFor="showPassword">Show Password</Label>
        </CheckBoxDivContainer>
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <Label className="label-heading" htmlFor="username">
          USERNAME
        </Label>
        <br />
        <UserInput
          placeholder="Username"
          className="username-input-field"
          type="text"
          id="username"
          value={username}
          onChange={this.onUserNameChangeEvent}
        />
      </>
    )
  }

  render() {
    const {showErrMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginDivContainer>
        <LoginContainer>
          <LoginForm onSubmit={this.onSubmitForm}>
            <NxtWatchImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
              className="login-image"
            />
            <div>{this.renderUsernameField()}</div>
            <div>{this.renderPasswordField()}</div>
            <LoginButton className="login-button" type="submit">
              Login
            </LoginButton>
            {showErrMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          </LoginForm>
        </LoginContainer>
      </LoginDivContainer>
    )
  }
}

export default Login
