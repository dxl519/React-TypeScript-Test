import { TodoProps } from "../type";

export const Todo: React.FC<TodoProps> = ({ todo, changeChecked, index }) => {
  const { text, isCompleted } = todo;

  // 父组件调用子组件方法传参
  const handleChangeChecked = (): void => {
    changeChecked(index);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleChangeChecked}
      />
      <span>{text}</span>
    </div>
  );
};
