import React, { useState, useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { currentUserNameQuery } from '../store'
import __style from './index.css'

export default function CurrentUserInfo() {
  // const userName = useRecoilValue(currentUserNameQuery)
  // const p = Promise.resolve(11)
  // // console.log(p)
  // const pp = p.then(() => {
  //   // console.log(11122)
  //   // debugger
  //   let a = { aa: 1 }
  //   delete a.aa
  //   // console.log(a)
  //   return Promise.resolve(909)
  // })
  // console.log(pp)
  // console.log(__style)
  let [state, setstate] = useState(0)
  // useEffect(() => {
  //   console.log('didmount', state)
  //   return () => {
  //     console.log('unmount', state)
  //   }
  // }, [state])
  const ref = useRef(999)
  useEffect(() => {
    // 每次都执行useEffect 保证ref为最新的值
    ref.current = 888
  })
  useEffect(() => {
    // console.log('000', state)
    const id = setInterval(() => {
      // console.log('111', state)
      setstate((state) => {
        // console.log(state, '999')
        return state + 1
      }) // 这个 effect 依赖于 `count` state
    }, 1000)
    return () => {
      // console.log('clear')
      clearInterval(id)
    }
  }, []) // 🔴 Bug: `count` 没有被指定为依赖

  return (
    <div>
      {/* {userName} */}
      <div>{state}</div>
      <button onClick={() => setstate(1)}>btn</button>
      <div style={{ width: 100, height: 100, backgroundColor: 'red' }}>11</div>
    </div>
  )
}
