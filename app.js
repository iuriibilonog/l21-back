const createError = require("http-errors");
const express = require("express");
const path = require("path");
require("dotenv").config();

const logger = require("morgan");
const cors = require("cors");


const contactsRouter = require("./routes/contacts");

const app = express();
const swaggerUi = require("swagger-ui-express");

app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: [
      process.env.API_URL,
      "http://localhost:1234",
      "http://192.168.0.103:1234",
      "https://questify-bdgrt.netlify.app/auth",
      process.env.CLIENT_URL,
    ],
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Accept",
      "Origin",
      "X-Requested-With",
      "Authorization",
      "Set-Cookie",
      "update",
      "hrmt",
    ],
  })
);


app.use("/api", contactsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
