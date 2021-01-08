import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListFilterState } from '../store'

export default function TodoListFilters() {
  // 从仓库中使用useRecoliState可以得到 筛选list的操作行为
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = ({ target: { value } }) => {
    // 更新 todoListFilterState的操作行为的值
    setFilter(value)
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}
