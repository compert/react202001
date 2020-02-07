import React, {useState, useEffect} from 'react'
import axios from 'axios'

import TodoTitle from '../TodoTitle'
import TodoList from '../TodoList'
import styles from './styles.scss'

const TodoWrapper = () => {
  const [todoList, setTodoList] = useState([])

  const getTodoList = async () => {
    try {
      const {data: todoList} = await axios.get('https://jsonplaceholder.typicode.com/todos')
      setTodoList(todoList.splice(0, 10))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getTodoList()
  }, [])

  return (
    <div className={styles.wrapper}>
      <TodoTitle />
      <TodoList todoList={todoList} />
    </div>
  )
}

export default TodoWrapper
