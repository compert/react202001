import React from 'react'
import {connect} from 'react-redux'
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import {actionUserLogin} from '../../redux/actions'
import {cBind} from '../../common/bind'
import Login from '../Login'
import Dashboard from '../Dashboard'
import AuthRoute from '../common/AuthRoute'

import styles from './styles.scss'

class Main extends React.Component {
  constructor(props) {
    super(props)
    cBind(this, styles)
  }
  handleLogout = () => {
    const {userLogout} = this.props
    userLogout()
  }
  render() {
    const {user} = this.props
    return (
      <Router>
        <header>
          <Link to="/">
            <button>메인</button>
          </Link>
          {user.isLogged ? (
            <button onClick={this.handleLogout}>로그아웃</button>
          ) : (
            <Link to="/login">
              <button>로그인</button>
            </Link>
          )}
          <Link to="/dashboard">
            <button>대시보드</button>
          </Link>
        </header>
        <hr />
        <div>
          <Switch>
            <AuthRoute exact path="/">
              <div>메인</div>
            </AuthRoute>
            <Route path="/login" component={Login} />
            <AuthRoute path="/dashboard">
              <Dashboard />
            </AuthRoute>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    userLogout: () => dispatch(actionUserLogin.init()),
  })
)(Main)
