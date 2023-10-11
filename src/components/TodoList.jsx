const TodoList = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="todo-list">
      <input
        type="checkbox"
        className="checkbox"
        onChange={() => onToggle(todo.id)}
      />
      <label className={`task ${todo.completed ? "completed" : ""} `}>
        {todo.task}
      </label>
      <span className="delete" onClick={() => onDelete(todo.id)}>
        {/* ❌ */}
        &times;
      </span>
    </div>
  );
};

export default TodoList;
