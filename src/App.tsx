import { useCallback, useState } from "react";
import { Todos } from "./models/type";
import { Todo } from "./views/todo";
import { TodoForm } from "./views/todoForm";

import "./index.css";
import { Footer } from "./views/footer";

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
    let newIsCompleted = false;

    const newTodos = [...todos];

    newTodos.forEach((todo) => {
      if (todo.isCompleted === false) return (newIsCompleted = true);
    });

    newTodos.map((todo) => {
      todo.isCompleted = newIsCompleted;
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
        <Footer amount={todos.length ?? 0} />
      </div>
    </div>
  );
}

export default App;
