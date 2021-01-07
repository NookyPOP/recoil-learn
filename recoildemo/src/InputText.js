import React from 'react'
// 从仓库中引入声明的状态
import { textState, charCountState } from './store/index'
// 从recoil中导入可以读写状态的hook useRecoilState
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
export default function InputText() {
  // 使用useRecoilState hook,初始化text值，并得到一个设置text的函数
  const [text, setText] = useRecoilState(textState)
  const charLength = useRecoilValue(charCountState)
  // const setCharLength = useSetRecoilState(charLength)
  // console.log('setCharLength', setCharLength)
  // setCharLength(11)
  const onchange = (e) => {
    setText(e.target.value)
  }
  return (
    <div>
      <input type="text" value={text} onChange={onchange} />
      <div>{charLength}</div>
    </div>
  )
}
