const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

//Store Your JSON file in Local Host (Implement FS module in order to read the JSON file)
app.get('/json1', (req, res) => {
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

//Perform read and write operation on JSON in the server side
app.get('/json2', (req, res) => {
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    const json = JSON.parse(data);
    json.c_id= "C1C",
    json.ph_no= "9124689752",
    json.bill_no= "101",
    json.address="BANGALORE",
    json.e_id= "E1M"
   
    fs.writeFile('data.json', JSON.stringify(json), (err) => {
      if (err) throw err;
      res.send('JSON file updated');
    });
  });
});

//Manipulate the server response in the client side
//Implement Routing feature using NodeJS
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/json", (req, res) => {
  fs.readFile("data.json", (err, data) => {
    if (err) throw err;
    const json = JSON.parse(data);
    console.log(json);
    res.send(JSON.stringify(json));
  });
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
