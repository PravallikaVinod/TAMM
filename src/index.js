const express = require('express');
const React = require('react');
const fs = require("fs");
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;
const app = express();
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/',(req,res) =>{
 const content = renderToString(<Home/>);
 const html = `
 <html>
<head>
<body>
<div id="root">${content}</div>
<script src="bundle.js"></script>
</body>
</head>
 </html>
 `
 res.send(html);
});

//Adding new card card to the system
app.post('/api/creditcard/add',(req,res) =>{
  let name = req.body.name;
  let limit = req.body.limit;
  let cardNumber = req.body.cardNumber;
  var content = {}
  content.status = "";
  let data = require("../creditCard.json");
  let isCardexists = data.creditCard.find(ele => ele.cardNumber == cardNumber);
  if(isCardexists){
    content.status = "Card Number already exists.";
      res.send(content);
  }else{
    let card = {"name":name,"cardNumber":cardNumber,"limit":limit,"balance":0};
    data.creditCard.push(card);
  
      fs.writeFile('creditCard.json', JSON.stringify(data), (err) => {
        // throws an error, you could also catch it here
        if (err) {
          content.status = "error";
          res.send(content);
        }
        // success case, the file was saved
      });
      content.status = "Card saved successfully";
  
        res.send(content);
  }
 

  });
  
  app.get('/api/creditcard/list',(req,res) =>{
    let data = require("../creditCard.json");
    res.send(data);
  });



app.listen(8000, () =>{
  console.log('Listening on port 8000')
});

module.exports = app
