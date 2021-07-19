const express = require("express");
const app = express();
app.listen(8000);

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
