import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td>{props.todo.text}</td>
        <td>
            <Link
                to={"/edit/"+ props.todo.id}
            >Edit</Link>
        </td>
        <td>
            <Link to={"/delete/"+ props.todo.id}>Delete</Link>
        </td>
    </tr>
);

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };

        this.todoList = this.todoList.bind(this);
    }

    componentDidMount() {
        axios.get(' https://isw394nyz9.execute-api.us-east-1.amazonaws.com/dev/todos')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });

        return this.state.todos;
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <table className="table table-striped" style={{ marginTop: 50, padding: 30 }}>
                    <tbody>
                    { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}