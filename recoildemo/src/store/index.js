import { atom, selector } from 'recoil'

// 使用atom来创建仓库的状态，参数为一个对象，key值必须是全局惟一
export const todoListState = atom({
  key: 'todoListState', // 全局惟一
  default: [
    {
      id: +new Date(),
      text: 'just do what do you want ',
      isComplete: true
    }
  ] // 默认值
})
// 筛选的操作动作
export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All' // Show All Show Completed Show UnCompleted
})
// 通过操作行为过滤后的state
// selector的 filteredTodoListState 依赖todoListState和todoListFilterState这两个状态，如果这两个状态改变了，filteredTodoListState就是重新运行得到
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: (all) => {
    console.log('all', all)
    // const list = get(todoListState)
    // const filter = get(todoListFilterState)
    // switch (filter) {
    //   case 'Show Completed':
    //     return list.filter((item) => item.isComplete)
    //   case 'Show UnCompleted':
    //     return list.filter((item) => !item.isComplete)
    //   default:
    //     return list
    // }
  }
})

// 筛选后的list的 每个指标的值
export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState)
    // 所有的list的数量
    const totalNum = todoList.length
    // list中完成的数量
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length
    // list中未完成的数量
    const totalUncompletedNum = totalNum - totalCompletedNum
    // list的完成的比例
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted
    }
  },
  // 可以设置值
  set: ({ set }, newValue) => {
    // newValue 为结构出的setText(111)传的值
    console.log('newValue', newValue)
    set(todoListState, [
      {
        id: +new Date(),
        text: 'do what do you want ',
        isComplete: true
      },
      {
        id: +new Date(),
        text: 'running',
        isComplete: true
      }
    ])
  }
})

const myDBQuery = ({ id }) => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject('fail000000000')
      resolve({ name: 'jack' })
    }, 2000)
  })
  console.log('p', p)
  return p
}
export const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 1
})
// selector 异步的数据
export const currentUserNameQuery = selector({
  key: 'CurrentUserName',
  get: async ({ get }) => {
    const response = await myDBQuery({
      userID: get(currentUserIDState)
    })
    console.log('response', response)
    if (response.error) {
      throw response.error
    }
    return response.name
  }
})
