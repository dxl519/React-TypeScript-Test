import { useCallback, useState } from "react";
import { Todos } from "./type";
import { Todo } from "./todo";
import { TodoForm } from "./todoForm";

import "./index.css";

function App() {
  // 初始化 Todos[] 列表
  const [todos, setTodos] = useState<Todos[]>([
    { text: "小黑", isCompleted: false },
    { text: "小黑", isCompleted: false },
    { text: "小黑", isCompleted: true },
  ]);

  // 添加 todo
  const handleClickTodo = (text: string) => {
    const todoObj: Todos = { text, isCompleted: false };

    const newTodos: Todos[] = [...todos, todoObj];

    setTodos(newTodos);
  };

  // 全选
  const handleClickAllSelect = (): void => {
    let newisCompleted = false;

    const newTodos = [...todos];

    newTodos.forEach((todo) => {
      if (todo.isCompleted === false) return (newisCompleted = true);
    });

    newTodos.map((todo) => {
      todo.isCompleted = newisCompleted;
    });

    setTodos(newTodos);
  };

  // 选中 || 未选中
  const handleChangeChecked = (index: number): void => {
    const newTodos = [...todos];

    newTodos[index].isCompleted = !newTodos[index].isCompleted;

    setTodos(newTodos);
  };

  // 删除
  const handleClickDelete = useCallback(
    (index: number): void => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    },
    [todos]
  );

  return (
    <div className="container">
      <div className="todo-container">
        <h3>TodoMVC</h3>
        <button className="btn" onClick={handleClickAllSelect}>
          全选
        </button>
        <TodoForm handleClickTodo={handleClickTodo}></TodoForm>
        <div className="todo-list">
          {todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                todo={todo}
                index={index}
                changeChecked={handleChangeChecked}
                clickDelete={handleClickDelete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
