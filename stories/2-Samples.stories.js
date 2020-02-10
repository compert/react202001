import React from 'react'

import App from './Routes/App'
import Root from './Todo/Root'

export default {
  title: 'Samples',
  component: App,
}

export const Routes = () => <App />

export const Todo = () => <Root />
