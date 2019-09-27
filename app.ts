const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("views/public"));

// app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/about", (req, res) => {
  console.log(res);
  res.render("pages/about.ejs");
});
app.listen(port, () => {
  console.log(`Lyssnar på port: ${port}`);
});
