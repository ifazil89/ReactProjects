import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";

class App extends Component {
    state = {
        todos: [
            {
                id: uuid(),
                title: "React Course",
                completed: false,
            },
            {
                id: uuid(),
                title: "Node JS Project Course",
                completed: true,
            },
            {
                id: uuid(),
                title: "React Native Course",
                completed: false,
            },
        ],
    };

    markComplete = (id) => {
        this.setState(
            this.state.todos.map((todo) => {
                if (todo.id == id) {
                    todo.completed = !todo.completed;
                }
            })
        );
    };

    deleteTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        });
    };

    addTodo = (title) => {
        const todo = {
            id: uuid(),
            title,
            completed: false,
        };
        this.setState({ todos: [...this.state.todos, todo] });
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route
                            exact
                            path="/"
                            render={(props) => (
                                <React.Fragment>
                                    <AddTodo addTodo={this.addTodo} />
                                    <Todos
                                        todos={this.state.todos}
                                        markComplete={this.markComplete}
                                        deleteTodo={this.deleteTodo}
                                    />
                                </React.Fragment>
                            )}
                        />

                        <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
