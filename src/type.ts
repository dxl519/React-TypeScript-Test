export type Todos = {
  text: string;
  isCompleted: boolean;
};

export type TodoProps = {
  todo: Todos;
  index: number | string;
};

export type TodoFormProps = {
  handleClickTodo: (text: string) => void;
};
