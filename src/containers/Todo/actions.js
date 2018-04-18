export const ADD_TODO = "Todo/ADD_TODO";
export const SET_VISIBILITY_FILTER = "Todo/SET_VISIBILITY_FILTER";
export const TOGGLE_TODO = "Todo/TOGGLE_TODO";
export const REMOVE_TODO = "Todo/REMOVE_TODO";

const generateId = () => Math.floor(Math.random() * 1000000);

export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: generateId(),
    text,
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    id,
  };
};
