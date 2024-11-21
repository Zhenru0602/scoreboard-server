var express = require('express');
var app = express();
app.use(express.json());
  
app.post('/update', function (req, res) {
   if (req.body.ott == "1234") {
      console.log(req.body.name)
      res.send(req.body)
   } else {
      res.sendStatus(403)
   }
});

  
app.listen(process.env.PORT || 8080, 
   () => console.log("Server is running..."));