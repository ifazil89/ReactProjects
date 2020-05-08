import React, { Component } from "react";
import Todo, { TodoItem } from "./TodoItem";
import ProtoTypes from "prop-types";

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem
                key={todo.id}
                todo={todo}
                markComplete={this.props.markComplete}
                deleteTodo={this.props.deleteTodo}
            />
        ));
    }
}

Todo.protoTypes = {
    todos: ProtoTypes.array.isRequired,
};
export default Todos;
