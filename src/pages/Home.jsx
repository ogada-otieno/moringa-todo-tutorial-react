import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import EditTodoModal from "../components/EditTodoModal";
import SearchModal from "../components/SearchModal";

function Home() {
  const [jsonData, setJsonData] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        const response = await fetch("http://localhost:5000/myTodos");
        if (!response.ok) {
          throw new Error("network response failed");
        }
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch data");
      }
    };

    fetchJsonData();
  }, []);

  const addTodo = async (newTodo) => {
    try {
      const response = await fetch("http://localhost:5000/myTodos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      const addedTodo = await response.json();
      setJsonData([...jsonData, addedTodo]);
      toast.success(`❤️‍🔥 Task "${addedTodo.title}" added successfully`);
    } catch (error) {
      console.error(error);
      toast.error(`🫣 Task "${newTodo.title}" failed to add`);
    }
  };

  const toggleTodo = async (id) => {
    const updatedTodos = jsonData.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo,
    );
    setJsonData(updatedTodos);
    const updatedTodo = updatedTodos.find((todo) => todo.id === id);

    try {
      const response = await fetch(`http://localhost:5000/myTodos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      });

      if (!response.ok) {
        throw new Error("network response failed");
      }

      if (updatedTodo.isComplete) {
        toast.success(`👌 Task "${updatedTodo.title}" marked as complete`);
      } else {
        toast.success(`👎 Task "${updatedTodo.title}" marked as incomplete`);
      }
    } catch (error) {
      console.error(error);
      toast.error("⚠️ An error occurred. Please try again");
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/myTodos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }

      setJsonData(jsonData.filter((todo) => todo.id !== id));
      toast.success("⛔️ Task deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("❗️ Failed to delete task");
    }
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
    document.getElementById("edit_modal").showModal();
  };

  const saveEdit = async (updatedTodo) => {
    try {
      const response = await fetch(
        `http://localhost:5000/myTodos/${updatedTodo.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTodo),
        },
      );

      if (!response.ok) {
        throw new Error("network response failed");
      }

      const updatedTodos = jsonData.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      );

      setJsonData(updatedTodos);
      toast.success(`🎉 Task "${updatedTodo.title}" updated successfully`);
    } catch (error) {
      console.error(error);
      toast.error("❗️ An error occurred. Please try again");
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      const filteredTodos = jsonData.filter(
        (todo) =>
          todo.title.toLowerCase().includes(query) ||
          todo.description.toLowerCase().includes(query),
      );
      setSearchResults(filteredTodos);
    } else {
      setSearchResults([]);
    }
  };

  const openModal = () => {
    document.getElementById("search_modal").showModal();
  };

  const closeModal = () => {
    document.getElementById("search_modal").close();
  };

  return (
    <>
      <div className="App container mx-auto p-4">
        <div className="flex justify-end">
          <button className="btn btn-primary" onClick={openModal}>
            Search Todos
          </button>
        </div>

        <SearchModal
          searchQuery={searchQuery}
          handleSearch={handleSearch}
          searchResults={searchResults}
          closeModal={closeModal}
        />

        <div className="flex flex-col lg:flex-row lg:space-x-8 mt-14">
          <div className="flex-1 flex items-stretch">
            <AddTodoForm addTodo={addTodo} className="flex-1" />
          </div>
        </div>
        <div id="todolist" className="mt-8">
          <TodoList
            todos={jsonData}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={handleEdit}
          />
        </div>

        <EditTodoModal
          todo={editingTodo}
          onClose={() => document.getElementById("edit_modal").close()}
          onSave={saveEdit}
        />
        <ToastContainer />
      </div>
    </>
  );
}

export default Home;
