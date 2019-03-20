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


#### Hosting the application on AWS
#### Server
- Clone the git repository and follow the steps
```$xslt
$ git clone git@github.com:Rakhee06/serverless-todo-app.git
$ cd server
$ npm install -g serverless
$ sls deploy
```

- On successful deployment, `serverless.yml` script creates Server endpoints, API gateway and DynamoDB table on AWS

#### Client
- Clone the git repository and follow the steps
```$xslt
$ git clone git@github.com:Rakhee06/serverless-todo-app.git
$ cd client
$ npm install
$ npm run build
```
- `npm run build` generates static pages in `./build` directory
- Login into AWS Console and click on `CloudFormation` on the home page or can also be searched by typing in the search bar
- Click on `Design Template`
- Use `cloudformation-script-to-deploy-static-website.yml` or `cloudformation-template-deploy-website.json` any one of them and paste it in the appropriate tabs. (Choose `JSON` or `YAML`)
- Click on `create stack` (`cloud icon with up arrow`)
- Give the stack name, continue clicking next until hit `Create` button
- This takes few minutes to deploy, say 15 mins
- Go to home page and search for `S3`
- The newly S3 bucket would be created with `public` as Access parameter
- Copy the name of the bucket and run the below command from application folder which contains `build` directory
```$xslt
$ aws s3 sync build/ s3://your-s3-bucket-name
```
- This uploads all the script to the bucket
- To access the endpoint of the URL, go to the AWS  console `S3\your-bucket\Properties\Static Website Hosting`


## Hosted on AWS using Lambda API and S3 bucket
[ServerLess-Todo-App](http://spa-todo-app-client.s3-website-us-east-1.amazonaws.com)
    