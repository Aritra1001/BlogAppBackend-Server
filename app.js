const express = require('express');
const route = require('./Route/route');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: "*"
}))
app.use(route);


app.listen(8080, ()=>{
    console.log("Our server is running on 8080");
})