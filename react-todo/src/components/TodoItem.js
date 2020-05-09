import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: "#ffffff",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none",
        };
    };

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={this.props.markComplete.bind(this, id)}
                />
                {title}
                <button
                    style={btnDelete}
                    onClick={this.props.deleteTodo.bind(this, id)}
                >
                    X
                </button>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

const btnDelete = {
    backgroundColor: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    float: "right",
};

export default TodoItem;
