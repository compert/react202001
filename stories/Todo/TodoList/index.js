import React from 'react'

import styles from './styles.scss'

const TodoList = ({todoList}) => {
  const todoItem = todoList.map(({id, title}) => {
    return (
      <div key={id} className={styles.todoItem}>
        {title}
      </div>
    )
  })
  return <div className={styles.wrapper}>{todoItem}</div>
}

export default TodoList
