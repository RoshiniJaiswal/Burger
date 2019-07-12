var express = require("express");

// During production this port will be used
var PORT = process.env.PORT || 8000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));

// Requesting for a json format
app.use(express.json());

// Requires the express-handlebars 
var exphbs = require("express-handlebars");

//app.engine is telling a pragram that which template to use 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Grabs the routes created in designated file 
var routes = require("./controller/burgerscontroller");

// Utilizes the routes grabbed above
app.use(routes);


app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT);
});