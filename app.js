const express = require("express");
const covidRouter = require("./routes/covidRoute");
const cors = require("cors");

const app = express();

// Trusting proxies which heroku uses to modify requests. At the top is a must.
app.enable("trust proxy");

const options = {
  origin: "*",
};

app.use(cors(options));
app.options("*", cors());

app.use(express.json());

app.use("/coviddata", covidRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the OpsLyft Backend. Go to /coviddata to see the data.");
});

module.exports = app;
