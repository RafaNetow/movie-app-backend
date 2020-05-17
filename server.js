const express = require("express");
const bodyParser = require("body-parser");
const cors = require ("cors");

const app = express ();
let corsOptions = {
    origin: "http://localhost:8081"
  };
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const db = require("./app/models")
db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to movie app" });
  });

require("./app/routes/movies")(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})
app._router.stack.forEach(function(r){
    if (r.route && r.route.path){
      console.log(r.route.path)
    }
  })