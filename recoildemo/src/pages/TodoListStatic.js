import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListStatsState } from '../store'

export default function TodoListStats() {
  // 使用useRecoilValue 只能读取仓库的值
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted
  } = useRecoilValue(todoListStatsState)

  const formattedPercentCompleted = Math.round(percentCompleted * 100)

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  )
}
