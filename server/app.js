const express = require('express') //express를 설치했기 때문에 가져올 수 있다.
var cors = require('cors')
const app = express()
app.use(cors());


var result
var fs = require('fs');
fs.readFile('test.json', 'utf8', function(err, data){
    result = data;    
});

app.post('/', function (req, res) {
    //res.send('POST request to the homepage');
    //mock server    
    res.statusCode = 200;
});

app.get('/', (req, res) => {
    //console.log(result)
    res.send(result);
    res.statusCode = 200;
    console.log(res);
})

app.listen(3000, (err) => {
    if(err) return console.log(err);
    console.log("The server is listening on port 3000");
})

// npm install --save cors