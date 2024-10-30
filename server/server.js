const express = require('express');
app = express();


app.get('/', (req, res) => {
    res.send('Hello World');  
  });

app.post('/login',(req, res) => {
  console.log("chuj");
});

app.listen(5000, () => {
    console.log(`Server listening on port 5000`);  
  });