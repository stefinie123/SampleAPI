const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const  Routes = require('./Routes');

app.use(bodyParser.json());
app.use('/',Routes);

app.listen(8082, 'localhost',function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log("Server listening on port 8082");
})