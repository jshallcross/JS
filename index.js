const express = require('express');
          app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("home");
});
app.get("/portfolio", function(req, res){
    res.render("portfolio");
});
app.get("/getintouch", function(req, res){
    res.render("getintouch");
});



app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("SERVER HAS STARTED");
});