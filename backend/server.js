const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


// It is interesting,if you try to fetch data from "/" route,
// it will give json <0 error. If you fetch the same data from
// another route such as "/test4", it will work just fine.
// thats why I commented out following part. Thats why Home.js 
// is importing from "/test4"
/*
app.get("/", function(req, res){
    const str = [{
      "id": "0",
      "name": "codr",
      "city": "midyat",
      "age": "something"
    }]
    res.end(JSON.stringify(str));
});
*/
app.get("/test4", function(req, res){
    const str = [{
      id: 1,
      name: "codr",
      city: "midyat",
      age: 123
    }]
    res.end(JSON.stringify(str));
    // JSON.stringify() converts a js object/VALUE to JSON string.
    // Because servers accepts data in JSON string format.
});

const server = app.listen(process.env.PORT || 4000);
const portNumber = server.address().port;
console.log(`port is open on ${portNumber}`);
