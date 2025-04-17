const dotenv = require("dotenv");
dotenv.config();

const { corsPolicy } = require("./cors");
const { db } = require("./db");

const env = {
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  // Agrega más variables si las necesitas
};

module.exports = {
  cors: corsPolicy,
  db,
  env,
};
