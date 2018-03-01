const path = require("path");
const express = require("express");
const compression = require("compression");
const app = express();

app.use(compression());

app.use("/:lang([a-z]{2})", express.static(path.join(__dirname, "dist")));

app.get("/", function(req, res) {
  res.redirect("/en");
});

app.listen(3001);
