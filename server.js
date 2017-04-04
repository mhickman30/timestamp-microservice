//Used Coding Tutorials 360 for help with this project
var express = require('express')
var app = express();

app.get('/dateValues/:dateVal', function (req, res) {
  var dateVal = req.params.dateVal;
  
  //Date formatting
  var dateFormattingOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  //Checking if inputted date is a unix code or not
  if (isNaN(dateVal)) {
    var naturalDate = new Date(dateVal);
    naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
    var unixDate = new Date(dateVal).getTime()/1000;
    
  } else {
    var unixDate = dateVal;
    var naturalDate = new Date(dateVal * 1000);
    naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
  }
  
  res.json({unix: unixDate, natural: naturalDate});
})
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})