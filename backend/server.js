const csv = require("csvtojson");
const path = require("path");
const mongoose = require("mongoose");

const csvFilePath = path.resolve("./assets/allagents.csv");

csv()
  .fromFile(csvFilePath)
  .then((accountants) => {
    accountants.map((accountant) => {
      console.log(Object.values(accountant)[0].trim());
      console.log(Object.values(accountant)[1].trim());
      console.log(Object.values(accountant)[2].trim());
    });
  });
