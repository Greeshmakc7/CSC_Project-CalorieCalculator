HealthFit – A Serverless Diet Insight Engine

For my project we’ll be using:

Amazon S3 to host the frontend
Amazon DynamoDB to store food data like calories, protein, fat, carbs
AWS Lambda to interact with DynamoDB
Amazon API Gateway (REST API) to connect everything securely
Amazon SNS sends personalized diet tips and messages to users based on calorie levels.



🔶 Step 1: DynamoDB Table Setup
"First, I created a DynamoDB table named FoodData.
The table schema includes:

![image](https://github.com/user-attachments/assets/0a508c85-ee67-44b9-a4cb-604bedeec684)

Partition key: FoodId (String)

Sort key: FoodName (String)

![image](https://github.com/user-attachments/assets/e839f192-f385-4847-958c-17dab1156f23)


I then inserted sample food data manually in this JSON format:

json
Copy
Edit
{
  "FoodId": { "S": "1" },
  "FoodName": { "S": "Banana" },
  "calories": { "N": "105" },
  "protein": { "N": "1.3" },
  "fat": { "N": "0.3" },
  "carbs": { "N": "27" }
}

![image](https://github.com/user-attachments/assets/6d654c63-1657-4149-9c7e-2df47d1f2c0c)

This allows us to fetch nutritional values based on the food name.

🔷 Step 2: Lambda Function to Fetch + Calculate
"I then created an AWS Lambda function to:

![image](https://github.com/user-attachments/assets/20d6544d-ac1e-4417-abdf-2decaa66521a)

Accept a food name and quantity from the frontend

Fetch calorie data from DynamoDB

Multiply it with the quantity

Return the result as JSON"**

Here’s the Lambda code:

visit the lambda code in repository 

🔁 Step 3: Create REST API in API Gateway
"Now let's connect this Lambda function using Amazon API Gateway (REST):"

Go to API Gateway > Create API

Select REST API > Build

Name it CalorieCalculatorAPI and click Create

Under Resources, click Create Resource

Resource Name: calories

Resource Path: /calories

![image](https://github.com/user-attachments/assets/2d16e85d-8f9e-43cc-a085-8ba63b80d226)


Under that resource, click Create Method → Select POST

Link the method to your Lambda function

Enable CORS

Click Actions → Deploy API

Choose a Stage (e.g., prod) and click Deploy

Copy the Invoke URL (e.g.)


https://abcd1234.execute-api.us-east-1.amazonaws.com/prod/calories

Step 4: Create Lambda Function for SNS Alerts
To send personalized health tips based on calories, we added an SNS-integrated Lambda function.


🔨 Lambda Function Code for SNS email

To enhance the functionality of the Calorie Calculator Web Application, I created a Lambda function that integrates with Amazon Simple Notification Service (SNS). This function helps send email or SMS notifications when specific conditions are met—for example, when a high-calorie food is entered.

![image](https://github.com/user-attachments/assets/30435f20-ea44-44a1-b345-cbcb5892cb39)
![image](https://github.com/user-attachments/assets/df963eb3-e8fb-413f-a9aa-7c624d53a622)


🔐 Step 5: Attach IAM Role for SNS Lambda Function
To allow Lambda to publish messages to SNS, we created and attached an IAM role.
![image](https://github.com/user-attachments/assets/3cf71b4f-2c84-4496-a926-0f0f738a341f)


✅ IAM Role Setup:
Go to IAM → Roles → Create Role

Select Lambda as the trusted entity

Attach policy: AmazonSNSFullAccess

🧩 Step 6: Frontend Hosted on S3
"I created a simple HTML form + JS script and hosted it on S3. Here's the code:"

visit index.html in the repository

🌍 Step 7: Make Your S3 Static Website Work
"Here’s how I made the static website live:"

Go to S3 > Your Bucket


![image](https://github.com/user-attachments/assets/071382a2-704f-472b-b055-0f6ebb97ddb1)

Enable Static Website Hosting

Index document: index.html

Upload the HTML file

Make the file public or set up CloudFront (for SSL + Caching)

Open the S3 Website URL — it now connects to your API!

✅ Final 
"And that’s it! I’ve now connected my frontend hosted on S3 to a Lambda-powered backend using REST API Gateway and DynamoDB. You can type any food and quantity, and get the calories instantly.
This architecture is fully serverless, scalable, and super cost-effective.




![image](https://github.com/user-attachments/assets/d5c41a02-e001-4c9b-b46d-297186134461)
![image](https://github.com/user-attachments/assets/bbef1768-0603-4435-bcbd-da4a1cac266c)
![image](https://github.com/user-attachments/assets/3ded6c24-1d96-408e-87bb-4981bf4ff478)
![image](https://github.com/user-attachments/assets/4672e794-2829-4a67-9178-e3a6d33a6b44)
![image](https://github.com/user-attachments/assets/f8a7a352-ae29-4526-8192-75828e183cd7)
![image](https://github.com/user-attachments/assets/d9b947f3-b2a5-417d-bab5-984a369aed72)
![image](https://github.com/user-attachments/assets/c5dcad7b-ec5b-4e04-9c09-22daafa4b3cc)









