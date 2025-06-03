const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

var items = [];
var day=10;

app.get("/", function (req, res) {
    res.render("list", { ejes: items });
});

app.post("/", function (req, res) {
    var item = req.body.ele1;

    if (item.trim() === "") {
        res.render("list", { 
            ejes: items, 
            errorMessage: "❌ Please enter a valid task!" 
        });
    } else {
        items.push(item);
        res.redirect("/");
    }
});


app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});