import { useState } from "react";
import { TodoFormProps } from "../type";

export const TodoForm: React.FC<TodoFormProps> = ({ handleClickTodo }) => {
  const [value, setValue] = useState<string>("");

  const handleClickSumbit = (): void => {
    if (value === "") return alert("输入内容不能为空");

    handleClickTodo(value);

    setValue("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<Element>): void => {
    if (event.keyCode === 13) {
      handleClickSumbit();
    }
  };

  const handleChangeValue: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    setValue(event.target.value.trim());
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChangeValue}
      />
      <button onClick={handleClickSumbit}>提交</button>
    </div>
  );
};
