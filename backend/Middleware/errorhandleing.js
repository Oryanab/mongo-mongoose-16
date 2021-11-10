"use strict";
const express = require("express");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const { Agent } = require("../modgodb");

/*
    error 500
*/
function middlewareServerError(req, res, next) {
  if (res.statusCode !== 500) {
    next();
  } else {
    res.status(500).json({
      message: "Our servers had an internal problem please comeback later",
      status: 500,
    });
  }
}

/*
      error 404
  */
function middlewarePageNotFound(req, res, next) {
  if (res.statusCode !== 404) {
    next();
  } else {
    res.status(404).json({
      message: "page not exist",
      status: 404,
    });
  }
}

/*
      check if city exist
  */

function middlewareCityNotFound(req, res, next) {
  Agent.findOne({ city: req.params.city }).then((result) => {
    if (result) {
      next();
    } else {
      res.status(404).json({
        message: "we have no agents from the city you have searched",
        status: 404,
      });
    }
  });
}

/*
      check agent id exist
      
  */

function middlewareAgentNotFound(req, res, next) {
  Agent.findOne({ license_id: req.params.id }).then((result) => {
    if (result) {
      next();
    } else {
      res.status(404).json({
        message: "we have no agents with the id you have searched",
        status: 404,
      });
    }
  });
}

module.exports = {
  middlewareServerError,
  middlewarePageNotFound,
  middlewareCityNotFound,
  middlewareAgentNotFound,
};
