const express = require("express");
const formData = require("express-form-data");
const phin = require("phin");

const app = express();

app.use(formData.parse());

app.post("/pkx", async (req, res) => {
  const lambdaResponse = await phin({
    url: process.env.PKHEX_LAMBDA_URL,
    method: "post",
    data: {
      body: `------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name="pkx"\r\n\r\n${req.body.pkx}\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--`,
      isBase64Encoded: false
    },
    parse: "json"
  });

  const pkxString = lambdaResponse.body.body;
  res.send(JSON.parse(pkxString));
});

app.listen(5000);
