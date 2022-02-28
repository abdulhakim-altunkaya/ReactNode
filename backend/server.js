const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({extended: true}));
//express.urlencoded() is needed to send form data
// express.json() helps express server to recognize the incoming Request Object as a JSON Object.
app.use(express.json());
//express.json() and express.urlencoded() are express middlewares
// used for POST and PUT method. In this exercise, we dont need them.
// But I put them in any case, to be a bit more informative.
app.use(express.static(path.join(__dirname, '../frontend/build')));

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
