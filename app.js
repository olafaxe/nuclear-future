"use strict";
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.set("view engine", "ejs");
app.use(express.static("views/public"));
app.get("/", (req, res) => {
    res.render("pages/index");
});
app.listen(port, () => {
    console.log(`Lyssnar på port: ${port}`);
});
