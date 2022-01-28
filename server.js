const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./routes/homeRouter");

const app = express();

app.engine("hbs", exphbs.engine({ extname: "hbs" }));
app.set("view engine", "hbs");

app.use("/", routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
