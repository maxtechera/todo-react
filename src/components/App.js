// @flow
import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import { withTodoHandlers } from "../containers/Todo/hocs";
import Todos from "./Todos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
    };
  }

  handleChange = ({ target: { value: newTodo } }) => this.setState({ newTodo });

  render() {
    return [
      <Title>TODO REACT</Title>,
      <Container>
        <TodoContainer>
          <AddTodoInput
            placeholder="What needs to be done?"
            value={this.state.newTodo}
            onChange={this.handleChange}
            onKeyPress={e =>
              e.key === "Enter" &&
              this.props.addTodo(this.state.newTodo) &&
              this.setState({ newTodo: "" })
            }
          />
          <Todos />
        </TodoContainer>
      </Container>,
    ];
  }
}

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    background: #f5f5f5;
    color: #4d4d4d;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    font-smoothing: antialiased;
    font-weight: 300;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-top: 32px;
  font-size: 50px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  text-rendering: optimizeLegibility;
`;

const TodoContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 32px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const AddTodoInput = styled.input`
  width: 100%;
  font-size: 24px;
  line-height: 1.4em;
  border: 0;
  padding: 16px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  outline: none;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
`;

export default withTodoHandlers(App);
