const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api", routes);
const { errorHandler } = require("./core/errors");
app.use(errorHandler);


module.exports = app;
