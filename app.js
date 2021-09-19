const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');    
app.use(expressLayouts);  
app.use(express.urlencoded({
    extended: true
  }));

app.use(express.static(__dirname + '/public'))

app.get('/', function(req,res) {
    res.render('pages/home')
});

app.get("/experience", function(req, res){
    res.render("pages/experience");
  });
  
  app.get("/habilities", function(req, res){
    res.render("pages/habilities");
  });

  app.get("/contact", function(req, res){
    res.render("pages/contact");
  });


app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
});
