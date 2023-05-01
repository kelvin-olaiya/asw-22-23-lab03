const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, ()=> {
    console.log('Listening on port 3000!');
});

const routes = require('./src/routes/moviesRoutes');
routes(app);

mongoose.connect("mongodb://localhost:27017/lab")
    .then( _ => console.log("[DB] Connection successfull"))
    .catch( _ => console.log("[DB] Unable to connect"));
