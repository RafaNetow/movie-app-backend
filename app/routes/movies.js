module.exports = function(app){
    const movies = require("../controllers/movie")
    const router = require("express").Router();
    router.post("/", movies.saveUserMovie)
    router.get("/", movies.findAll)
    app.use('/api/movies',router)
}