// 导出单个特性
// let a = 111
// export const name1; // also var, const
// export let aa = 22
// export const name11 = 1 // also var, const
// export function FunctionName() {
//   console.log('aa')
// }
// export class ClassName {
//   constructor() {
//     const b = 1
//   }
// }

// // // 导出列表
// let name1 = 111
// let variable1 = 2
// export { name1, name2 }

// // 重命名导出
// export { variable1 as name1, variable2 as name2 }
// let o = {
//   variable1: 11,
//   variable2: 22
// }
// // // 解构导出并重命名
// export const { variable1, variable2: name2 } = o

// // 默认导出
// Only one default export allowed per module.
// export default 0 ? 2 : console.log(11)
// export default function fn() {
//   console.log('default')
// // } // also class, function*
// export { name1 as default }

// // 导出模块合集
// export * from '../TodoListStatic' // does not set the default export
// export * as name1 from …; // Draft ECMAScript® 2O21
// export { name1, name2, …, nameN } from …;
// export { import1 as name1, import2 as name2, …, nameN } from …;
// export { default } from …;
//  重定向
// export { default as Home  } from './home'

// import Home from './home';

// export default Home;
// console.log(default)

// const name = 1
// const fn = () => {
//   console.log(1)
// }

// export
