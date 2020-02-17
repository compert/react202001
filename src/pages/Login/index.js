import React from 'react'

import {cBind} from '../../common/bind'
import styles from './styles.scss'

class Login extends React.Component {
  constructor(props) {
    super(props)
    cBind(this, styles)
  }
  render() {
    return (
      <div className={this.cx('member-login')}>
        <form action="">
          <h1>
            <img src={require('../../images/login/logo.png')} alt="i-bot" />
          </h1>
          <h2>로그인</h2>
          <div className={this.cx('login')}>
            <input id="main_userId" type="text" placeholder="ID" />
            <input id="main_userPass" type="password" placeholder="Password" />
          </div>
          <input id="main_loginBtn" type="button" value="Login" className={this.cx('btn', 'btn-login')} />
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

export default Login
