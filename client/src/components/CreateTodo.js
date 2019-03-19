import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {

    constructor(props) {
     super(props);

     this.state = {
         text: '',
     };

     this.onChangeDescription = this.onChangeDescription.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeDescription(e) {
        this.setState({ text: e.target.value });
    }

    onSubmit() {

        const newTodo = {
            text: this.state.text,
        };


        axios.post('https://isw394nyz9.execute-api.us-east-1.amazonaws.com/dev/todos', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            text: '',
        });

        this.props.history.push('/');

    }

    render() {
        return (
            <div>
                <h3>Create</h3>
                <form onSubmit={this.onSubmit} style={{ marginTop: 50}}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.text}
                                onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
};