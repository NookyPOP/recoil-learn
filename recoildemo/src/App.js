import './App.css'
import TodoList from './pages/TodoList'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <TodoList></TodoList>
      </RecoilRoot>
    </div>
  )
}

export default App
