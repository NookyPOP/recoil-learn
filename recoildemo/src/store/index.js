import { atom, selector } from 'recoil'

// 使用atom来创建仓库的状态，参数为一个对象，key值必须是全局惟一
export const todoListState = atom({
  key: 'todoListState', // 全局惟一
  default: [
    {
      id: +new Date(),
      text: 'do what do you want ',
      isComplete: true
    }
  ] // 默认值
})

// export const charCountState = selector({
//   key: 'charCountState',
//   get: ({ get }) => {
//     console.log('get', get)
//     const text = get(textState)
//     return text.length
//   }
// })
