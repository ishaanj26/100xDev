// Express Basic - creating a HTTP server
// to install - npm install express
// to run- node index.js - open localhost:3000

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.post("/backend-api/conversation", (req, res) => {
    res.send("Hit the Endpoint");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});