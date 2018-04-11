import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Todos = ({ todos, removeTodo, toggleTodoComplete }) => (
  <TodoList>
    {todos.map((todo, idx) => (
      <TodoItem
        idx={idx}
        todo={todo}
        removeTodo={removeTodo}
        toggleTodoComplete={toggleTodoComplete}
      />
    ))}
  </TodoList>
);

const TodoList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #e6e6e6;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

export default Todos;
