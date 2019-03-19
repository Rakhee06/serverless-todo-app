'use strict';

//Initializing the AWS package
const AWS = require('aws-sdk');

//creating instances
const TODO_TABLE = process.env.TODO_TABLE;
const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {

    //Setting the timestamp from Date
    const timestamp = new Date().getTime();
    //Setting the data from the event body
    const data = JSON.parse(event.body);

    //Checking if the text is string
    if (typeof data.text !== 'string') {
      console.error('Validation Failed!');
      callback(new Error('Couldn\'t create the todo item.'));
      return;
    }

    //Create parameters for the DynamoDB table
    const params = {
      TableName: TODO_TABLE,
      Item: {
          id: uuid.v1(),
          text: data.text,
          checked: false,
          updatedAt: timestamp,
          createdAt: timestamp
      }
    };

    //Inserts a new entry in the table
    dynamodb.put(params, (error, result) => {

        if (error) {
            console.error(error);
            callback(new Error('Couldn\'t create the todo item.'));
            return;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Item)
        };
        callback(null, response);
    })

};
