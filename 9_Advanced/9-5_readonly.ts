{
  type ToDo = {
    title: string;
    description: string;
  }

  // these are already declared
  // E.g. Partial<T>, Required<T> and so on...
  function display(todo: Readonly<ToDo>) {
    // can not assign the readonly type property
    todo.title = 'sleep';
  }
}