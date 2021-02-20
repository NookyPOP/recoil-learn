import './App.css'
import CurrentUserInfo from './pages/SyncTest'
import TodoList from './pages/TodoList'
import { RecoilRoot } from 'recoil'
import React from 'react'

// import aa from './pages/export'

function App() {
  // console.log(aa)
  // aa
  // console.log(variable1, name2)
  return (
    <div className="App">
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading...</div>}>
          <TodoList />
          <CurrentUserInfo />
        </React.Suspense>
      </RecoilRoot>
    </div>
  )
}

export default App
