import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';

export default class DeleteTodo extends Component {

    componentDidMount() {
        axios.delete('https://isw394nyz9.execute-api.us-east-1.amazonaws.com/dev/todos/'+this.props.match.params.id, this.props.match.params.id)
            .then(res => console.log(res.data));


    }

    render() {
        return(
            <div>
                <Redirect to="/" />
            </div>
        );
    }

}