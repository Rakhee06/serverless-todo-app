# ServerLess-Todo-App

ServerLess-Todo-App is a cloud-based Todo app.


#### Technology Used
- [React.js](https://reactjs.org)
- [Node.js](https://nodejs.org/en/)
- [ServerLess](https://nodejs.org/en/)
- [AWS](https://aws.amazon.com)
    - S3
    - API Gateway
    - Lambda
    - CloudFormation
    - CloudFront
   
    
#### Pre-requisite
    - Node v6.50 or later
    - ServerLess CLI v1.9.0 or later
    - Aws account
        - Setup aws provider credentials
- [Watch the video here](https://www.youtube.com/watch?v=KngM5bfpttA)


## On Local
#### Installation for client
- Clone the git repository and follow the steps
```$xslt
$ git clone git@github.com:Rakhee06/serverless-todo-app.git
$ cd client
$ npm install
$ npm start
```
- The application will open at `http://localhost:3000`


#### Installation for server
- Clone the git repository and follow the steps
```$xslt
$ git clone git@github.com:Rakhee06/serverless-todo-app.git
$ cd server
$ npm install -g serverless
$ sls deploy
```

- On successful deployment, `serverless.yml` script creates Server endpoints, API gateway and DynamoDB table on AWS


## Hosted on AWS using Lambda and S3 bucket
[ServerLess-Todo-App](git clone git@github.com:Rakhee06/serverless-todo-app.git)
    