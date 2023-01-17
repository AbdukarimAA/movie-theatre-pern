const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    // ProfilePic: {type: DataTypes.STRING},
    IsAdmin: {type: DataTypes.STRING, defaultValue: 'USER'},
});

const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    comment: {type: DataTypes.STRING}
});

const Movie = sequelize.define('movie', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false, required: true},
    desc: {type: DataTypes.STRING(2048), unique: true, allowNull: false},
    director: {type: DataTypes.STRING, allowNull: false},
    country: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    imgTitle: {type: DataTypes.STRING, allowNull: false},
    imgSmall: {type: DataTypes.STRING, allowNull: false},
    trailer: {type: DataTypes.STRING, allowNull: false},
    video: {type: DataTypes.STRING, allowNull: false},
    year: {type: DataTypes.STRING, allowNull: false},
    limit: {type: DataTypes.INTEGER, allowNull: false},
    genres: {type: DataTypes.STRING, allowNull: false},
    isSeries: {type: DataTypes.BOOLEAN, allowNull: false},
    ratings: {type: DataTypes.INTEGER, defaultValue: 0},
});

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
});

const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
}, {
    timestamps: false
});

const FilmCompany = sequelize.define('film_company', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
});

const ListInfo = sequelize.define('list_info', {
    title: { type: DataTypes.STRING, required: true, unique: true },
    type: { type: DataTypes.STRING },
    genre: { type: DataTypes.STRING },
    content:{type: DataTypes.ARRAY(DataTypes.STRING)}
});

const MovieInfo = sequelize.define('movie_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    quality: {type: DataTypes.STRING, defaultValue: 'FHD'},
    // trailer: {type: DataTypes.STRING, allowNull: false},
    // video: {type: DataTypes.STRING, allowNull: false},
    // producer: {type: DataTypes.STRING, allowNull: false},
    // actors:{type: DataTypes.ARRAY(DataTypes.STRING)},
    // country:{type: DataTypes.STRING, allowNull: false},
    // year:{type: DataTypes.STRING, allowNull: false},
    // genre:{type: DataTypes.STRING, allowNull: false},
    // ageRestriction:{type: DataTypes.STRING, allowNull: false},
    // imdbRatings:{type: DataTypes.ARRAY(DataTypes.STRING)}
    // content: {
    //     type: Sequelize.ARRAY(Sequelize),
    //     defaultValue: []
    // },
    // actors1: {
    //     type: Sequelize.ARRAY(Sequelize),
    //     defaultValue: [],
    // }
});

const Actor = sequelize.define('actor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    // actorInfo: {type: DataTypes.ARRAY(DataTypes.STRING)}
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

Genre.hasMany(Movie);
Movie.belongsTo(Genre);

FilmCompany.hasMany(Movie);
Movie.belongsTo(FilmCompany);

Movie.hasMany(MovieInfo);
MovieInfo.belongsTo(Movie);

// ListInfo.hasMany(Movie);
// Movie.belongsTo(ListInfo);

Movie.belongsToMany(Actor, {through: TypeMovieInfo});
Actor.belongsToMany(Movie, {through: TypeMovieInfo});

module.exports = {
    User,
    Comment,
    Movie,
    Rating,
    Genre,
    FilmCompany,
    MovieInfo,
    Actor,
    TypeMovieInfo,
    ListInfo
};
