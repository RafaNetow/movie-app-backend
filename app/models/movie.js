module.exports = (sequelize,  Sequlize) => {
    const userMovie = sequelize.define("userMovie", {
        email: {
            type: Sequlize.STRING
        },
        auth0Id: {
            type: Sequlize.STRING
        },
        typeOfMovies: {
            type: Sequlize.STRING
        },
        rangeOfMovies: {
            type: Sequlize.STRING
        }

    });
    return userMovie; 
}