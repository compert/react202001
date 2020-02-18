import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

class AuthRoute extends React.PureComponent {
  render() {
    const {user, children, ...rest} = this.props
    return (
      <Route
        {...rest}
        render={({location}) =>
          user.isLogged ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: {from: location},
              }}
            />
          )
        }
      />
    )
  }
}

export default connect(state => ({
  user: state.user,
}))(AuthRoute)
