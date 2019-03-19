import React, {Component} from 'react';
import axios from 'axios';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            text: '',
        }
    }

    componentDidMount() {
        axios.get('https://isw394nyz9.execute-api.us-east-1.amazonaws.com/dev/todos/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    text: response.data.text
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangeTodoDescription(e) {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const updateTodo = {
            text: this.state.text,
            checked: false
        };

        if (this.props.match.params.id) {
            console.log('Im here');
            console.log(this.props.match.params.id);
            axios.put('https://isw394nyz9.execute-api.us-east-1.amazonaws.com/dev/todos/'+this.props.match.params.id, updateTodo)
                .then(res => console.log(res.data))
                .catch(error => {
                    if (error) {
                        console.log(error);
                    }
                });
            this.props.history.push('/');
        }

    }

    render() {
        return (
            <div>
                <h3>Edit</h3>
                <form onSubmit={this.onSubmit} style={{ marginTop: 50}}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}