const express = require("express");
const bodyParser = require("body-parser");
const cors = require ("cors");

const app = express ();

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})