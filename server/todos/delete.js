'use strict';

//Initializing the AWS package
const AWS = require('aws-sdk');

//creating instances
const TODO_TABLE = process.env.TODO_TABLE;
const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.delete = (event, context, callback) => {

    //Create parameters for DynamoDB table
    const params = {
        TableName: TODO_TABLE,
        Key: {
            id: event.pathParameters.id
        }
    };

    //Deletes the entry from the table for the provided id
    dynamodb.delete(params, (error, result) => {
        if (error) {
            console.error(error);
            callback(new Error('Couldn\'t remove the todo item.'));
            return;
        }

        const response = {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({})
        };
        callback(null, response);
    })

};