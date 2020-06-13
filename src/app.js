const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const morgan = require("morgan");


class App {
  constructor() {
    this.server = express();
    this.server.use(cors());
    this.middlewares();
    this.routes();

  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(morgan('dev')); 
  }

  routes() {
    this.server.use(routes);
  }

}

module.exports = new App().server;
