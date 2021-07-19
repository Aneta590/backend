const express = require("express");
const app = express();
//const PORT = 8000;
app.listen(process.env.PORT);

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

const hotels = ["Hilton", "Ritz", "Trianon Palace"];

app.get("/hotels", (req, res) => {
  res.send(hotels);
});

app.get("/hotels/:index", (req, res) => {
  const id = req.params.id;
  res.send(hotels[index - 1]);
});

app.post("/hotels", (req, res) => {
  const newHotel = req.body;
  hotels.push(newHotel.name);
});

app.put("/hotels/:index", (req, res) => {
  const indexFirst = req.params.index;
  const name = req.query.name;
  //hotels.splice(indexFirst, 1, name);
  hotels[indexFirst] = name;
});
