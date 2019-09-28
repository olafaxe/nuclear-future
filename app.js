"use strict";
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static("views/public"));
app.get("/", (req, res) => {
    res.render("pages/index");
});
app.get("/main", (req, res) => {
    res.render("pages/main");
});
app.get("/about", (req, res) => {
    res.render("pages/about");
});
app.get("/projects", (req, res) => {
    res.render("pages/projects");
});
app.listen(port, () => {
    console.log(`Lyssnar på port: ${port}`);
});
