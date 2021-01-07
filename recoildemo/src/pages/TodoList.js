import React from 'react'
import TodoItemCreator from './TodoItemCreator'
import TodoItem from './TodoItem'

import { useRecoilValue } from 'recoil'
import { todoListState } from '../store'
export default function TodoList() {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}
