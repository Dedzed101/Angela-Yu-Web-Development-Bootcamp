//jshint esversion:6

const express = require("express");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// CREATE - Connects to MongoDB and create DB schema / Model
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});
const itemsSchema = {
  name: String
}
const Item = mongoose.model("Item", itemsSchema);

const Item1 = new Item ({
  name: "Welcome to your Todo List!"
})
const Item2 = new Item ({
  name: "Hit the + button to add a new item."
})
const Item3 = new Item ({
  name: "Hit this button to delete an item."
})

const defaultItems = [Item1, Item2, Item3];

Item.insertMany(defaultItems, function(err){
  if (err){
    console.log(err)
  } else {
    console.log("Success!")
  }
});

// GET ROUTES

app.get("/", function(req, res) {

const day = date.getDate();

  res.render("list", {listTitle: "Today", newListItems: items});

});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

// POST ROUTES

app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

// LISTENER

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
