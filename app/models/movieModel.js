module.exports = (sequelize,  Sequlize) => {
    const userMovie = sequelize.define("user", {
        email: {
            type: Sequlize.STRING
        },
        auth0Id: {
            type: Sequlize.STRING
        },
        typeOfMovies: {
            type: Sequlize.STRING
        },
        yearOfMovies: {
            type: Sequlize.STRING
        }

    });
    return userMovie; 
}