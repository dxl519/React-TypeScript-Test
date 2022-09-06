import { useState } from "react";
import { Todos } from "./type";
import { Todo } from "./todo";
import { TodoForm } from "./todoForm";

import "./index.css";

function App() {
  const [todos, setTodos] = useState<Todos[]>([
    { text: "小黑", isCompleted: false },
    { text: "小黑", isCompleted: false },
    { text: "小黑", isCompleted: true },
  ]);

  const handleClickTodo = (text: string) => {
    const todoObj = { text, isCompleted: false };
    const newTodos = [...todos, todoObj];
    setTodos(newTodos);
  };
  return (
    <div className="container">
      <div className="todo-container">
        <h3>TodoMVC</h3>
        <TodoForm handleClickTodo={handleClickTodo}></TodoForm>
        <div className="todo-list"></div>
        {todos.map((todo, index) => {
          return <Todo key={index} todo={todo} index={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
