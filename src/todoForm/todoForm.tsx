import { useState } from "react";
import { TodoFormProps } from "../type";

export const TodoForm: React.FC<TodoFormProps> = ({ handleClickTodo }) => {
  const [value, setValue] = useState<string>("");

  // 提交
  const handleClickSumbit = (): void => {
    if (value === "") return alert("输入内容不能为空");

    handleClickTodo(value);

    setValue("");
  };

  // 监听键盘按下回车
  const handleKeyDown = (event: React.KeyboardEvent<Element>): void => {
    if (event.keyCode === 13) {
      handleClickSumbit();
    }
  };

  // 获取 input 输入值
  const handleChangeValue: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    setValue(event.target.value.trim());
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChangeValue}
      />
      <button className="btn" onClick={handleClickSumbit}>
        提交
      </button>
    </div>
  );
};
