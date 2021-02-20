import React from 'react'
import TodoItemCreator from './TodoItemCreator'
import TodoItem from './TodoItem'
import TodoListStats from './TodoListStatic'
import TodoListFilters from './TodoListFiters'

import { useRecoilValue, useRecoilState } from 'recoil'
import { todoListState, todoListStatsState } from '../store'
export default function TodoList() {
  const todoList = useRecoilValue(todoListState)
  const [
    { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted },
    setText
  ] = useRecoilState(todoListStatsState)
  const onClick = () => {
    // 可以对selector使用useRecoilState，执行setText更新函数
    setText(111)
  }
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
      <div>
        {(totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted)}
      </div>
      <button onClick={onClick}>button</button>
    </>
  )
}
