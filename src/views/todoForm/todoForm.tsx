import { useState } from "react";
import { TodoFormProps } from "../../models/type";

export const TodoForm: React.FC<TodoFormProps> = ({ handleClickTodo }) => {
  const [value, setValue] = useState<string>("");

  // 提交
  const handleClickSubmit = (): void => {
    if (value === "") {
      return alert("输入内容不能为空");
    }

    handleClickTodo(value);

    setValue("");
  };

  // 监听键盘按下回车
  const handleKeyDown = (event: React.KeyboardEvent<Element>): void => {
    if (event.key === "Enter") {
      handleClickSubmit();
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
      <button className="btn" onClick={handleClickSubmit}>
        提交
      </button>
    </div>
  );
};
