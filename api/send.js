const express = require("express");
const mail_route = require("../route/mail_routes");
const serverless = require("serverless-http");

const app = express();
app.use(express.json());
app.use("/api/send", mail_route);

module.exports.handler = serverless(app);
