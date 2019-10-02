const sgMail = require("@sendgrid/mail");
const sslRedirect = require("heroku-ssl-redirect");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("views/public"));
app.use(sslRedirect());
app.use(
  express.urlencoded({
    extended: true
  })
);

dotenv.config({
  path: "./.env"
});

// console.log(process.env.SENDGRID_USER, process.env.SENDGRID_API_KEY);

// // console.log(process.env.SENDGRID_API_KEY);

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: "olafaxe@gmail.com",
//   from: "test@example.com",
//   subject: "Sending with Twilio SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>"
// };
// sgMail.send(msg);

app.get("/", (req, res) => {
  res.render("pages/index", { sentMail: null });
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

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

app.post("/", (req, res) => {
  let subject = req.body.subject;
  let text = req.body.text;
  let sender = req.body.email;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.SENDGRID_MAIL,
    from: sender,
    subject: subject,
    text: text
  };
  sgMail.send(msg).then(e => {
    let sentMail = "RIGHT ON, I'LL BE IN TOUCH";
    res.render("pages/index", { sentMail: sentMail });
  });
});

app.listen(port, () => {
  console.log(`Lyssnar på port: ${port}`);
});
