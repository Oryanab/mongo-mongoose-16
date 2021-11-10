"use strict";
const csv = require("csvtojson");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DBURL)
  .then((result) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
const Schema = mongoose.Schema;

const agentSchema = new Schema(
  {
    license_id: {
      type: String,
    },
    full_name: {
      type: String,
    },
    city: {
      type: String,
    },
  },
  { timestamps: true }
);

const Agent = mongoose.model("Agent", agentSchema);

const csvFilePath = path.resolve("../assets/allagents.csv");

/*
csv()
  .fromFile(csvFilePath)
  .then((accountants) => {
    accountants.map((accountant) => {
      const agent = new Agent({
        license_id: Object.values(accountant)[0].trim(),
        full_name: Object.values(accountant)[1].trim(),
        city: Object.values(accountant)[2].trim(),
      });
      agent
        .save()
        .then((result) => {
          console.log("added");
        })
        .catch((err) => {
          console.log("faild");
        });
    });
  });
*/
module.exports = { Agent };
