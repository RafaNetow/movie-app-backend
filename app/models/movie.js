module.exports = (sequelize,  Sequlize) => {
    const userMovie = sequelize.define("userMovie", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
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