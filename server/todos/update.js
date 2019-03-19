'use strict';

//Initializing the AWS package
const AWS = require('aws-sdk');

//creating instances
const TODO_TABLE = process.env.TODO_TABLE;
const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.update = (event, context, callback) => {

    const timestamp = new Date().getTime();
    const data = JSON.parse(event.body);

    //Creating parameters for DynamoDB
    const params = {
        TableName: TODO_TABLE,
        Item: {
            id: event.pathParameters.id,
            text: data.text,
            checked: data.checked,
            updatedAt: timestamp,
        }
    };

    //Checking if the text and checked value is valid
    if (typeof data.text !== 'string' || typeof data.checked !== 'boolean') {
        console.error('Validation Failed!');
        callback(new Error('Couldn\'t update the todo item.'));
        return;
    }

    //Edit the existing entry in the table for a provided id
    dynamodb.put(params, (error, result) => {
        if (error) {
            console.error(error);
            callback(new Error('Couldn\'t update the todo item.'));
            return;
        }

        const response = {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(result.Item)
        };
        callback(null, response);
    })

};
