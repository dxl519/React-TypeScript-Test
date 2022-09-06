import { useEffect, useRef, useState } from "react";
import { TodoProps } from "../type";

export const Todo: React.FC<TodoProps> = ({
  todo,
  changeChecked,
  index,
  clickDelete,
}) => {
  const { text, isCompleted } = todo;

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [editValue, setEditValue] = useState<string>("");

  useEffect(() => {
    setEditValue(text);
  }, [isEdit]);

  // 双击进入编辑
  const handleDoubleClick = (): void => {
    setIsEdit(true);
  };

  // 编辑框失焦
  const handleBlurValue = (): void => {
    setIsEdit(false);
    todo.text = editValue;
    setEditValue("");
  };

  // 编辑框输入
  const handleChangeValue: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    setEditValue(event.target.value);
  };

  // 键盘按下回车
  const hadnleKeyDown = (event: React.KeyboardEvent<Element>): void => {
    if (event.keyCode === 13) {
      todo.text = editValue;
      setIsEdit(false);
      setEditValue("");
    }
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => changeChecked(index)}
      />
      {isEdit ? (
        <input
          type="text"
          value={editValue}
          onBlur={handleBlurValue}
          onChange={handleChangeValue}
          onKeyDown={hadnleKeyDown}
        />
      ) : (
        <span
          className="todo-text"
          onDoubleClick={handleDoubleClick}
          style={{ textDecorationLine: isCompleted ? "line-through" : "none" }}
        >
          {text}
        </span>
      )}

      <button className="btn-delete " onClick={() => clickDelete(index)}>
        删除
      </button>
    </div>
  );
};
