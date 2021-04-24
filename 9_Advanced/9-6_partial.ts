{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'medium' | 'low';
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return {
      ...todo,
      ...fieldsToUpdate,
    }
  }

  const todo: ToDo = {
    title: 'learn TypeScript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  };

  const fieldsToUpdate: Partial<ToDo> = {
    priority: 'medium',
  }

  const updatedTodo = updateTodo(todo, fieldsToUpdate);
  console.log(updatedTodo);
}