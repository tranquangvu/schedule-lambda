const axios = require('axios');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = () => {
  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      const params = {
        Bucket: process.env['BUCKET_NAME'],
        Key: `log-at-${(new Date).toISOString()}.json`,
        Body: JSON.stringify(response.data),
      };
      s3.putObject(params, function (err, data) {
        if (err){
          console.log(err);
        }
        else {
          console.log('Successfully put object');
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
