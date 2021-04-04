// Modules
const express = require("express");
const app = express();
const baseRoutes = require("./routes/index");
const handlebars = require("express-handlebars");
const path = require("path");
// Midwares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Handlebars
app.engine("handlebars", handlebars({ defaulLayout: "main" }));
app.set("view engine", "handlebars");
// Public
app.use(express.static(path.join(__dirname, "public")));
//Rotes
app.use("/", baseRoutes);
// Others
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Running in " + PORT);
});
