import './App.css';
import TodoList from './TodoList';

// parent component of <TodoList />
function App() {
  return (
    <div className='App'>
      <h1>todo tutorial</h1>
      <div id='todolist'>
        {/* <div id='todoitem'>todo one</div>
        <div id='todoitem'>todo two</div>
        <div id='todoitem'>todo three</div> */}
      <TodoList />
      </div>


    </div>
  );
}

export default App;
