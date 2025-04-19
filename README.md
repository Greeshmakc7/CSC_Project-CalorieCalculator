HealthFit - Calorie Calculator a Serverless Application 

For my project we’ll be using:

Amazon S3 to host the frontend
Amazon DynamoDB to store food data like calories, protein, fat, carbs
AWS Lambda to interact with DynamoDB
Amazon API Gateway (REST API) to connect everything securely



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

🧩 Step 4: Frontend Hosted on S3
"I created a simple HTML form + JS script and hosted it on S3. Here's the code:"

visit index.html in the repository

🌍 Step 5: Make Your S3 Static Website Work
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

![image](https://github.com/user-attachments/assets/66e88d1a-997b-42e6-bb17-78afc00ede47)
![image](https://github.com/user-attachments/assets/aaef67da-86c9-43b5-ad62-a7cf011301c7)
![image](https://github.com/user-attachments/assets/461c1e84-4b32-4828-9e26-6cb02114baf6)
![image](https://github.com/user-attachments/assets/b88e733a-d901-4b88-92bc-f3ea8be0fbe3)





