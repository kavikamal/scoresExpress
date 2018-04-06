
var scores = [{name: "Vishwa", score: 50}, 
              {name: "Kavya", score: 390},
              {name: "Suresh", score: 500},
              {name: "Kavitha", score: 200}];
var express = require('express')
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.get('/scores', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/javascript');
    scores.sort((a, b)=>{return b.score - a.score});
    body = scores.slice(0,3);  
    res.send(body)
});
app.put('/scores', (req, res) => {
    res.statusCode = 201;
    scores.push(req.body); 
    console.log(scores);
    res.setHeader("content-type", "application/json")
    res.send(scores)
});

app.get('*', (req, res)=>{
    res.statusCode = 404;
    res.status(404).send('Invalid URL')
});

app.listen(3000, () => console.log(scores))