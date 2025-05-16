const express = require("express");
const mail_route = require("../route/mail_routes");
const serverless = require("serverless-http");

const app = express();
app.use(express.json());
app.use("/api/send", mail_route);

app.all("*", (req, res) => {
  res.json({ status: false, message: "url not found" });
});

module.exports.handler = serverless(app);
