const express = require("express");
const path = require("path");
const hbs = require("hbs")

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

//carpeta de estáticos
app.use(express.static(path.join(__dirname, "public")))

//donde está cada vista:
const viewsRoute = path.join(__dirname, "public", "views")
const partialsRoute = path.join(__dirname, "public", "partials")

//setear el engine:
app.set("view engine", "hbs")
app.set("views", viewsRoute)
hbs.registerPartials(partialsRoute)

app.get("/", (req, res) => {
  res.render("index", {
    title: "este es handlebars"
  });
});


app.listen(PORT, () => {
  console.log(`Server en ${PORT}`);
});
