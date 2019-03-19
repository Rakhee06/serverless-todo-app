import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import TodoList from "./components/TodoList";
import DeleteTodo from './components/DeleteTodo';

import logo from "./logo.png";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                        <a className="navbar-brand" href="https://codingthesmartway.com">
                            <img src={logo} width="30" height="30" alt="Todo" />
                        </a>
                        <Link to="/" className="navbar-brand">TODO List</Link>
                        <div className="collpase nav-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link">Create Todo</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Route path="/" exact component={TodoList} />
                    <Route path="/edit/:id" component={EditTodo} />
                    <Route path="/create" component={CreateTodo} />
                    <Route path="/delete/:id" component={DeleteTodo} />
                </div>
            </Router>
        );
    }
}

export default App;