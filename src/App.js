<<<<<<< HEAD
import './App.css'

// Replace your code here
const App = () => <div>Hello World</div>
=======
import {Switch, Route} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <ProtectedRoute exact path="/" component={Home} />
  </Switch>
)
>>>>>>> Login Working

export default App
