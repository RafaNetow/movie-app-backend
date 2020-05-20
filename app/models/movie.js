module.exports = (sequelize,  Sequelize) => {
    const userMovie = sequelize.define("userMovie", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING
        },
        typeOfMovies: {
            type: Sequelize.STRING
        },
        rangeOfMovies: {
            type: Sequelize.STRING
        }

    });
    return userMovie; 
}//asdas