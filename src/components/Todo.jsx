import Form from "./Form";
import Header from "./Header";
import { useState } from "react";
import TodoList from "./TodoList";
import SortingList from "./SortingList";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Clean the house", completed: false },
    { id: 3, task: "Read a book", completed: false },
    { id: 4, task: "Write a blog post", completed: false },
    { id: 5, task: "Play CODM", completed: false },
  ]);
  const [task, setTask] = useState("");
  const newTask = {
    id: crypto.randomUUID(),
    task,
    completed: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task) return;

    setTodos([...todos, newTask]);
    setTask("");
  };

  const handleToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  //   Clear List
  const handleClearTodo = () => {
    const confirm = window.confirm("Are you sure");
    if (confirm) setTodos([]);
  };
  //   Sort todos
  const [sortBy, setSortBy] = useState("input");
  let sortedTodos;

  if (sortBy === "input") {
    sortedTodos = todos;
  } else if (sortBy === "description") {
    sortedTodos = todos.slice().sort((a, b) => a.task.localeCompare(b.task));
  } else if (sortBy === "completed") {
    sortedTodos = todos
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));
  }

  return (
    <div className="todo">
      <Header />
      <Form task={task} setTask={setTask} onSubmit={handleSubmit} />
      <div className="todo-list-wrapper">
        {sortedTodos.map((todo) => (
          <TodoList
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <SortingList
        onClearTodo={handleClearTodo}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
    </div>
  );
};

export default Todo;
