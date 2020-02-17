import React from 'react'
import {connect} from 'react-redux'

import {actionUserLogin} from '../../redux/actions'
import {cBind} from '../../common/bind'
import styles from './styles.scss'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: 'enliple',
      userPw: '11111111',
    }
    cBind(this, styles)
  }
  handleLogin = () => {
    const {userLogin} = this.props
    const {userId, userPw} = this.state
    const data = {userId, userPw}
    userLogin(data, {
      cbSuccess: () => {
        console.log('Login success!')
      },
      cbFailure: response => {
        console.log('Login failed!')
      },
    })
  }
  render() {
    const {userId, userPw} = this.state
    return (
      <div className={this.cx('member-login')}>
        <form action="">
          <h1>
            <img src={require('../../images/login/logo.png')} alt="i-bot" />
          </h1>
          <h2>로그인</h2>
          <div className={this.cx('login')}>
            <input name="userId" type="text" placeholder="ID" value={userId} onChange={this.changeInputText} />
            <input name="userPw" type="password" placeholder="Password" value={userPw} onChange={this.changeInputText} />
          </div>
          <input value="Login" type="button" className={this.cx('btn', 'btn-login')} onClick={this.handleLogin} />
          <div className={this.cx('links')}>
            <a href="#" className="btn-open-popup">
              회원가입
            </a>
            <a href="#" className="btn-open-popup-find-id">
              아이디찾기
            </a>
            <a href="#" className="btn-open-popup-find-pw">
              비밀번호찾기
            </a>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    userLogin: (data, rest) => dispatch(actionUserLogin.request(data, rest)),
  })
)(Login)
