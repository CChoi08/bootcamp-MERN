import React, { useState } from 'react'
import List from './components/List'
import ToDoForm from './components/ToDoForm'

function App() {
  const [todo, setToDo] = useState([]);

  return (
    <div>
      <ToDoForm setTodo = {setToDo} todo = {todo} />
      <List setTodo = {setToDo} todo = {todo} />
    </div>
  );
}

export default App;
