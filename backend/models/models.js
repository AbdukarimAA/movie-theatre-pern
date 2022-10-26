const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING, defaultValue: 'User'},
});

const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    comment: {type: DataTypes.STRING}
});

const Movie = sequelize.define('movie', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    ratings: {type: DataTypes.INTEGER, defaultValue: 0},
    // actors: {type: DataTypes.STRING, defaultValue: 0}
});

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
});

const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
});

const FilmCompany = sequelize.define('film_company', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
});

const MovieInfo = sequelize.define('movie_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    quality: {type: DataTypes.STRING, defaultValue: 'FHD'},
    // actors: {type: DataTypes.ARRAY, defaultValue: 0}
});

const Actor = sequelize.define('actor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    actorInfo: {type: DataTypes.STRING, unique: true, allowNull: false}
});

const TypeMovieInfo = sequelize.define('type_movie_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasMany(Rating);
Rating.belongsTo(User);

Movie.hasOne(Rating);
Rating.belongsTo(Movie);

User.hasMany(Comment);
Comment.belongsTo(User);

Movie.hasMany(Comment);
Comment.belongsTo(Movie);

Movie.hasOne(Genre);
Genre.belongsTo(Movie);

FilmCompany.hasMany(Movie);
Movie.belongsTo(FilmCompany);

Movie.hasMany(MovieInfo);
MovieInfo.belongsTo(Movie);

MovieInfo.belongsToMany(Actor, {through: TypeMovieInfo});
Actor.belongsToMany(MovieInfo, {through: TypeMovieInfo});

module.exports = {
    User,
    Comment,
    Movie,
    Rating,
    Genre,
    FilmCompany,
    MovieInfo,
    Actor,
    TypeMovieInfo
};
