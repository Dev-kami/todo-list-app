const Form = ({ task, setTask, onSubmit }) => {
  return (
    <form className="form-group" onSubmit={(e) => onSubmit(e)}>
      <input
        className="input-box"
        type="text"
        placeholder="Add your task"
        value={task}
        autoFocus={true}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="add-btn">ADD</button>
    </form>
  );
};

export default Form;
