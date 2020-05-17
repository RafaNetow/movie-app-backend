module.exports = app => {
    const movies = require("../controllers/movie")
    const router = require("express").Router();

    router.post("/", movies.saveUserMovie)
    router.get("/", movies.findAll)

    app.user('/api/movies',router)
}