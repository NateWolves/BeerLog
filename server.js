
const express = require("express");

let PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

// Parse application as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// setting up Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// impots our routes into the server
const routes = require("./controllers/beers_controller.js");

app.use(routes);

// Starting up the server 
app.listen(PORT, ()=> {
    console.log(`Server listening on: http://localhost: ${PORT}`);
})