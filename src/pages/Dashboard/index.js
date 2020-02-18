import React from 'react'
import {connect} from 'react-redux'

import {cBind} from '../../common/bind'
import styles from './styles.scss'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    cBind(this, styles)
  }
  render() {
    return <div>대시보드</div>
  }
}

export default connect(state => ({
  user: state.user,
}))(Dashboard)
