import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import Header from '../components/NavBar';
import EditTodoModal from '../components/EditTodoModal';
import Footer from '../components/Footer';
// import StateDemo from './StateDemo';

// parent component of <TodoList />
function Home() {
  const [jsonData, setJsonData] = useState([]);
  const [theme, setTheme] = useState('light');
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    const fetchJsonData = async () => {
      // use normal fetch
      try {
        const response = await fetch('http://localhost:5000/myTodos');
        if (!response.ok) {
          throw new Error('network response failed');
        }
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJsonData();
  }, []);

  //theme setting
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  //toggle theme
  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // func that handles adding a newTodo:{} and pass it as a prop to the AddTodoForm
  const addTodo = (newTodo) => {
    setJsonData([...jsonData, newTodo]);
  };

  // func that handles toggling a todo's isComplete status
  const toggleTodo = async (id) => {
    // update the isComplete status of the todo with the id passed
    const updatedTodos = jsonData.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo,
    );

    // update the state with the updated todos
    setJsonData(updatedTodos);

    // Get the updated todo
    const updatedTodo = updatedTodos.find((todo) => todo.id === id);

    // update the todo on the server using a PAtch request
    try {
      const response = await fetch(`http://localhost:5000/myTodos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodo),
      });

      if (!response.ok) {
        throw new Error('network response failed');
      }

      // notify the user of the successful update
      if (updatedTodo.isComplete) {
        toast.success(`👌 Task "${updatedTodo.title}" marked as complete`);
      } else {
        toast.success(`👎 Task "${updatedTodo.title}" marked as incomplete`);
      }
    } catch (error) {
      console.error(error);
      toast.error('⚠️ An error occurred. Please try again');
      //Rollback the state if the update fails
      setJsonData(jsonData);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/myTodos/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }

      // Remove the todo from the local state
      setJsonData(jsonData.filter((todo) => todo.id !== id));
      toast.success('⛔️ Task deleted successfully');
    } catch (error) {
      console.error(error);
      toast.error('❗️ Failed to delete task');
    }
  };
  // Edit todo
  const handleEdit = (todo) => {
    setEditingTodo(todo);
    document.getElementById('edit_modal').showModal();
  };

  const saveEdit = async (updatedTodo) => {
    try {
      const response = await fetch(
        `http://localhost:5000/myTodos/${updatedTodo.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTodo),
        },
      );

      if (!response.ok) {
        throw new Error('network response failed');
      }

      const updatedTodos = jsonData.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      );

      setJsonData(updatedTodos);
      toast.success(`🎉 Task "${updatedTodo.title}" updated successfully`);
    } catch (error) {
      console.error(error);
      toast.error('❗️ An error occurred. Please try again');
    }
  };

  return (
    <>
      <div className='App container mx-auto p-4'>
        <div className='flex flex-col lg:flex-row lg:space-x-8 mt-14'>
          <div className='flex-1 flex items-stretch'>
            <AddTodoForm addTodo={addTodo} className='flex-1' />
          </div>
        </div>
        <div id='todolist' className='mt-8'>
          {/* passing todos as a prop to <TodoList /> */}
          <TodoList
            todos={jsonData}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={handleEdit}
          />
        </div>

        <Footer />

        {/*EditTodoModal component */}
        <EditTodoModal
          todo={editingTodo}
          onClose={() => document.getElementById('edit_modal').close()}
          onSave={saveEdit}
        />

        {/* Toaster component from react-hot-toast*/}
        <ToastContainer />
      </div>
    </>
  );
}

export default Home;
