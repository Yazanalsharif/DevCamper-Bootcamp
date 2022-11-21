const express = require("express");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config/.env",
});

const app = express();

const port = process.env.Port || 5000;
