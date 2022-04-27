require("dotenv").config();
const logger = require("morgan")
const express = require("express");
const routes = require("./routes/index.js")
const { sequelize } = require("./db/models/index")
const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(logger("dev"));
app.use("/", routes);


app.listen(PORT, () => {
  console.log(`:: SERVER RUNNING ON ${process.env.NODE_ENV} ON PORT ${PORT}`)
  // console.log(sequelize)
  sequelize.authenticate().then(() => {
    console.log("Base de datos está conectada.");
  });
});
