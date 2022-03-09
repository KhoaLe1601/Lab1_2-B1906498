const express = require("express");
const app = express();
const cors = require("cors");
const setupContactRoutes = require("./app/routes/contact.router");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application."});
});

setupContactRoutes(app);

module.exports = app;