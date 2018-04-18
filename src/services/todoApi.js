const delay = () => new Promise(resolve => setTimeout(resolve, 500));
const generateId = () => Math.floor(Math.random() * 1000000);

const database = {
  todos: [
    {
      id: generateId(),
      text: "Hey!",
      completed: true,
    },
    {
      id: generateId(),
      text: "Ho!",
      completed: true,
    },
    {
      id: generateId(),
      text: "Let's go!",
      completed: false,
    },
  ],
};

export const fetchTodos = () => delay().then(() => database.todos);

export const saveTodo = text =>
  delay().then(() => {
    const todo = {
      id: generateId(),
      text,
      completed: false,
    };
    database.todos.push(todo);
    return todo;
  });

export const toggleTodo = id =>
  delay().then(() => {
    database.todos = database.todos.map(
      t =>
        t.id !== id
          ? t
          : {
              ...t,
              completed: !t.completed,
            },
    );
  });

export const deleteTodo = id =>
  delay().then(() => {
    database.todos = database.todos.filter(todo => todo.id !== id);
  });
