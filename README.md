# Schedule job in AWS lambda
Example to run schedule job to fetch json data and save to aws S3

## Deploy
```
  npm install
```

Add `serverless-config/env/env.${stage}.yml` file

```
  awsRegion:
  awsAccount:
  environment:
    BUCKET_NAME:
```

Use serverless cli to deploy to lamba

```
  sls deploy --stage dev --aws-profile serverless
```
