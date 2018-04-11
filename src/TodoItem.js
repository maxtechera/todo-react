import React from "react";
import styled from "styled-components";

const TodoItem = ({ idx, todo, removeTodo, toggleTodoComplete }) => (
  <Item key={todo.id}>
    <Completed onClick={() => toggleTodoComplete(idx)} />
    <Value>{todo.value}</Value>
    <Remove onClick={() => removeTodo(idx)}>×</Remove>
  </Item>
);

const Item = styled.div`
  position: relative;
  font-size: 20px;
  background: white;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #ededed;
  white-space: pre-line;
  word-break: break-all;
  padding: 8px 16px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Completed = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  outline: none;
  :checked:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
  }
  :after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
  }
`;

const Value = styled.div`
  margin-left: 16px;
  flex: 2;
`;

const Remove = styled.div`
  font-size: 30px;
  display: none;
  color: #cc9a9a;
  ${Item}:hover & {
    display: block;
  }
`;

export default TodoItem;
