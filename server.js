//Dependencies
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

//Allows static content in public folder to be used templates
app.use(express.static("public"));

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/handlebars-routes.js")(app);

app.listen(PORT, () => {
console.log("Server listening on: http://localhost:" + PORT);
});