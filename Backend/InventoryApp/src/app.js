const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api", routes);
const { errorHandler,notFound } = require("./core/middelware");
app.use(notFound)
app.use(errorHandler);
module.exports = app;
