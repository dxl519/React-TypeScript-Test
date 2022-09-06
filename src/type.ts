export type Todos = {
  text: string;
  isCompleted: boolean;
};

export type TodoProps = {
  todo: Todos;
  index: number;
  changeChecked: (index: number) => void;
  clickDelete: (index: number) => void;
};

export type TodoFormProps = {
  handleClickTodo: (text: string) => void;
};
