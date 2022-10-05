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

export type FooterProps = {
  amount: number;
};

export type FooterList = {
  id: number;
  text: string;
};
