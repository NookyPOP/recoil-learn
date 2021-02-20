import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../store'

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('')
  // 使用 设置状态的hook函数 useSetRecoilState，参数为一个需要更改的状态，函数返回一个set函数，可以更新totoListState的值
  const setTodoList = useSetRecoilState(todoListState)
  //  添加item todo 使用setTodoList函数，传递一个函数A，函数A的参数为useSetRecoilState Hook传递的初始值
  //  useSetRecoilState Hook 可以接收到的参数为值或函数（函数的参数为上一个值）
  const addItem = () => {
    setTodoList((oldTodoList) => [
      // 上一个值
      ...oldTodoList,
      // 新添加的值
      {
        id: getId(),
        text: inputValue,
        isComplete: false
      }
    ])
    setInputValue('')
  }
  // input框，改变后的函数
  const onChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

// utility for creating unique Id
let id = 0
function getId() {
  return id++
}

// 订阅者，观察者

// selector的 多层嵌套，父selector的使用set ，get；子组件的使用父组件的selector，
// 每个页面也可以使用单独的atom，selector；
// 易读性，eslint

/* 

1,使用多个atom，计算selector的值
2,单个的atom，计算selector的值
*/
