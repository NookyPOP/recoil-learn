import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../store'

export default function TodoItem({ item }) {
  // item 为props item
  const [todoList, setTodoList] = useRecoilState(todoListState)
  // 解构出仓库的state和更新state的函数
  // 可以任何组件中使用 todoListState
  const index = todoList.findIndex((listItem) => listItem === item)
  // 根据props item 可以找到当前的item的index

  //  编辑todoitem的函数
  const editItemText = ({ target: { value } }) => {
    // 结构出来事件对象 event
    // 调用replaceItemIndex 处理更改list
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value
    })
    // 更新state
    setTodoList(newList)
  }
  // 切换当前的todoite是否完成，改变 isComplete
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete
    })
    // 更新state
    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)
    // 更新state
    setTodoList(newList)
  }

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}

function replaceItemAtIndex(arr, index, newValue) {
  // 使用数组的slice函数 截取
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
