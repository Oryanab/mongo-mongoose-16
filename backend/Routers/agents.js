"use strict";
const express = require("express");
const apiRouter = express.Router();
const path = require("path");
const mongoose = require("mongoose");
const { Agent } = require("../modgodb");

apiRouter.get("/cities", (req, res) => {
  Agent.distinct("city")
    .then((dataBase) => {
      res.json(dataBase);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "had problems loading contacts", status: 404 });
    });
});

apiRouter.get("/agents", (req, res) => {
  Agent.find()
    .then((dataBase) => {
      res.json(dataBase);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "had problems loading contacts", status: 404 });
    });
});

apiRouter.get("/agents/:city", (req, res) => {
  Agent.find({ city: req.params.city })
    .then((dataBase) => {
      if (dataBase.length > 0) {
        res.json(dataBase);
      } else {
        res
          .status(404)
          .json({
            message: "we have no agents from the city you have searched",
            status: 404,
          });
      }
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "had problems loading contacts", status: 404 });
    });
});

apiRouter.put("/agent/:id/edit", (req, res) => {
  Agent.findOneAndUpdate(
    { license_id: req.params.id },
    {
      $set: {
        full_name: req.body.full_name,
        city: req.body.city,
      },
    }
  )
    .then((agent) => {
      res.status(200).json({ message: "Agent has been updated", status: 200 });
    })
    .catch((err) => {
      res.status(404).json({ message: "Process faild", status: 404 });
    });
});

module.exports = apiRouter;
