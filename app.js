const express = require("express");
const cors = require("cors");
const setupContactRoutes = require("./app/routes/contact.router");
const { BadRequestError, errorHandler } = require("./app/errors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application."});
});

setupContactRoutes(app);

//handle 404 response
app.use((req, res, next) => {
    next(new BadRequestError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    errorHandler.handleError(err, res);
});

module.exports = app;