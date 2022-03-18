const axios = require("axios");
const dayjs = require("dayjs");

const Covid = require("../models/CovidModel");

exports.getData = async (req, res, next) => {
  try {
    const response = await axios.get("https://api.covid19api.com/summary");
    // Replace the data in the database where message is "Success".
    await Covid.deleteMany({ message: { $eq: "Success" } });
    await Covid.create({ ...response.data, message: "Success" });

    res.status(201).json({
      status: "success",
      data: response.data,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
  }
};

exports.getTimeData = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.covid19api.com/country/india?from=${req.params["date"]}&to=${dayjs(
        new Date(req.params["date"])
      )
        .add(15, "day")
        .toISOString()}`
    );
    await Covid.deleteMany({ message: { $eq: "time" } });
    data_to_put = response.data.map((item) => {
      return {
        ...item,
        message: "time",
      };
    });

    await Covid.create(data_to_put);

    res.status(201).json({
      status: "success",
      data: response.data,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
  }
};
