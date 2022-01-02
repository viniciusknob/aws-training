var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });
exports.handler = async function (event) {
  var params = {
    Destination: {
      ToAddresses: [ "knob.vinicius@gmail.com" ],
    },
    Message: {
      Body: {
        Text: { Data: "Test" },
      },
      Subject: { Data: "Test Email" },
    },
    Source: "knob.vinicius@gmail.com",
  };
 
  return ses.sendEmail(params).promise().then(data => {
      return {
        'statusCode': 201,
        'body': JSON.stringify({
            status: 'ok',
            // data,
        })
    }
  });
};