import './App.css';
import {useState} from 'react'

function App() {
  const INITIAL_TODOLIST = []
  const [writtenText, setWrittenText] = useState("")
  const [todoList, setTodoList] = useState(INITIAL_TODOLIST)
  const textTracker = (event) => setWrittenText(event.target.value)
  const todoAdder = () => setTodoList([...todoList, writtenText])
  return (
    <div className="container">
      <div className="inputWrap">
        <input type="text" onChange={textTracker}></input>
        <button onClick={todoAdder}>추가하기</button>
      </div>
      <div className="todoListWrap">
        <h1 className="todoList-title">Todo List</h1>
        <TodoList list={todoList}/>
      </div>
    </div>
  );
}

function TodoList ({list}) {
  return (
    <div className="todoList-entry">
      {list.map(v => {return <TodoCard title={v} />})}
    </div>
  )
}

function TodoCard ({title}) {
  return (
    <div className="todo">
      <p>{title}</p>
    </div>
  )
}

export default App;
