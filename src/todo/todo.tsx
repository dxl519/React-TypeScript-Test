import { TodoProps } from "../type";

export const Todo: React.FC<TodoProps> = ({
  todo,
  changeChecked,
  index,
  clickDelete,
}) => {
  const { text, isCompleted } = todo;

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => changeChecked(index)}
      />
      <span
        style={{ textDecorationLine: isCompleted ? "line-through" : "none" }}
      >
        {text}
      </span>
      <button onClick={() => clickDelete(index)}>删除</button>
    </div>
  );
};
