const db = require("../models");

const Movie = db.movie;


exports.saveUserMovie = (req, res) => {
    console.log("testing ...");
    if (!req.body) {
        res.status(400).send({
            message: "can no be empty!"
        });
        return;
    }

    const userMovie = {
        email: req.body.email,
        description: req.body.auth,
        typeMovies: req.body.typeMovies,
        rangeYearOfMovies: req.body.rangeYearOfMovies        
    }

    Movie.create(userMovie).
        then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message
            });
        });
    };

    exports.findAll = (req, res) => {
        console.log("testing ...");
        
         Movie.findAll()
         .then(data => {
             res.send(data);
         })
         .catch(err => {
             res.status(500).send( {
                 message: err.message
             })
         });
    };


