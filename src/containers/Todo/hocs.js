import { connect } from "react-redux";
import { selectVisibleTodos, selectTodos } from "./selectors";
import { addTodo, removeTodo, toggleTodo, setVisibilityFilter } from "./actions";

export const withTodos = connect(state => ({
  todos: selectTodos(state),
}));

export const withVisibleTodos = connect(state => ({
  todos: selectVisibleTodos(state),
}));

export const withTodoHandlers = connect(null, { addTodo, removeTodo, toggleTodo });

export const withSetVisibilityFilter = connect(null, { setVisibilityFilter });
