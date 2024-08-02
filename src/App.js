// import './App.css';
import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import StateDemo from './StateDemo';
import TodoList from './TodoList';

const myTodos = [
  {
    id: 1,
    title: 'todo one',
    description: 'lorem ipsum lorem',
    isComplete: false,
  },
  {
    id: 2,
    title: 'todo two',
    description: 'lorem ipsum lorem',
    isComplete: true,
  },
  {
    id: 3,
    title: 'todo three',
    description: 'lorem ipsum lorem',
    isComplete: false,
  },
  {
    id: 4,
    title: 'todo four',
    description: 'lorem ipsum lorem',
    isComplete: true,
  },
];

// parent component of <TodoList />
function App() {
  const [todos, setTodos] = useState(myTodos);

  // func that handles adding a newTodo:{} and pass it as a prop to the AddTodoForm
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className='App'>
      <StateDemo />
      <h1>todo tutorial</h1>
      <AddTodoForm addTodo={addTodo} />
      <div id='todolist'>
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
