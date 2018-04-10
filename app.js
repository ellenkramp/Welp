const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    let campgrounds = [
        {name: "Bass Landings", image: "https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022_1280.jpg"},
        {name: "Dune Lake", image: "https://cdn.pixabay.com/photo/2018/04/09/21/27/festival-3305615_1280.jpg"},
        {name: "Rocky Point", image: "https://cdn.pixabay.com/photo/2017/09/26/13/50/rv-2788677_1280.jpg"}
    ];
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(3000, () => {
    console.log("Welp has begun!");
});