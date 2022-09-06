import { TodoProps } from "../type";

export const Todo: React.FC<TodoProps> = ({ todo, index }) => {
  return (
    <div>
      <span>{todo.text}</span>
    </div>
  );
};
