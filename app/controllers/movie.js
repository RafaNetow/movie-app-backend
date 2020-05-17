const db = require("../models");

const Movie = db.movie;


exports.saveUserMovie = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "can no be empty!"
        })
    }
}