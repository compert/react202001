import React from 'react'

import Routes from './Routes/App'
import Todo from './Todo/App'

export default {
  title: 'Samples',
  component: Todo,
}

export const API조회 = () => <Todo />

export const 라우팅 = () => <Routes />
