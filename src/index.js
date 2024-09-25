const express = require("express");
const axios = require("axios");
const redis = require("redis");
const responseTime = require("response-time");
const app = express();
const port = 3000;
const url =
  "https://5fuyjppwp8.execute-api.us-east-1.amazonaws.com/pdn//comfama/vacantes-api/api/v1/vacantes";

const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

app.use(responseTime());

app.get("/vacantes", async (req, res) => {
  const vacantes = await client.get("vacantes");

  if (vacantes) {
    return res.json(JSON.parse(vacantes));
  }

  const response = await axios.get(url);

  await client.setEx("vacantes", 10, JSON.stringify(response.data));

  res.json(response.data);
});

app.listen(port, async () => {
  await client.connect();
  console.log(`Server is running on port ${port}`);
});
