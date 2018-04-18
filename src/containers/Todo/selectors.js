export const selectTodos = state => state.todos;

export const selectVisibilityFilter = state => state.visibilityFilter;

export const selectVisibleTodos = state => {
  const todos = selectTodos(state);
  const filter = selectVisibilityFilter(state);
  switch (filter) {
    case "all":
      return todos;
    case "completed":
      return todos.filter(t => t.completed);
    case "active":
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};
