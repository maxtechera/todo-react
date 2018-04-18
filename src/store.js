import todoApp from "./containers/Todo/reducer";
import { createStore } from "redux";

const persistedState = {
  todos: [
    {
      id: 1,
      text: "HEY",
      completed: true,
    },
  ],
};

const store = createStore(
  todoApp,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
