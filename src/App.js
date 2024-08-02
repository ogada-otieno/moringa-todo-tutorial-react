// import './App.css';
import AddTodoForm from './AddTodoForm';
import StateDemo from './StateDemo';
import TodoList from './TodoList';

const todos = [
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
  return (
    <div className='App'>
      <StateDemo />
      <h1>todo tutorial</h1>
      <AddTodoForm />
      <div id='todolist'>
        {/* <div id='todoitem'>todo one</div>
        <div id='todoitem'>todo two</div>
        <div id='todoitem'>todo three</div> */}
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
