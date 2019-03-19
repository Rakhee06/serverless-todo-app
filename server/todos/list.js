'use strict';

//Initializing the AWS package
const AWS = require('aws-sdk');

//creating instances
const TODO_TABLE = process.env.TODO_TABLE;
const dynamodb = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: TODO_TABLE
};

module.exports.list = (event, context, callback) => {

   // Scans and returns the entry from the table for the provided id
   dynamodb.scan(params, (error, result) => {
      if (error) {
         console.error(error);
         callback(new Error('Couldn\'t fetch the todo'));
         return;
      }

      const response = {
         statusCode: 200,
         headers: {
            'Access-Control-Allow-Origin': '*',
         },
         body: JSON.stringify(result.Items)
      };
      callback(null, response);
   })

};
