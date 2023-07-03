export default function InputList(props) {
  console.log("I am here!! InputList");
  return (
    <div className="input-todolist">
      <h1>To-do List</h1>
      <input
        placeholder="Enter your task..."
        className="todolist--input"
        type="text"
        autoFocus
      />
      <button className="todolist--btn" onClick={props.addToTask}>
        Add
      </button>
    </div>
  );
}
