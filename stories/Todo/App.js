import React from 'react'

import TodoWrapper from './TodoWrapper'
import styles from './styles/index.scss'

const App = () => {
  return (
    <div className={styles.body}>
      <TodoWrapper />
    </div>
  )
}

export default App
