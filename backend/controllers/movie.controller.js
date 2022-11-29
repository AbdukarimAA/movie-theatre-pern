const {Movie, } = require("../models/models");
const jwt = require("jsonwebtoken");

class MovieController {
    async createMovie(req, res) {
        if(req.user.isAdmin) {
            const {
                title, desc, img,
                imgTitle, imgSmall, trailer,
                video, year, limit,
                genres, isSeries, ratings } = req.body;
            try{
                const movie = await Movie.create({
                    title, desc, img,
                    imgTitle, imgSmall, trailer,
                    video, year, limit,
                    genres, isSeries, ratings})
                await movie.save();
                return res.json({movie: movie})
            } catch (err) {
                res.status(500).json(err, 'you are not allowed')
            }
        } else {
            res.status(500).json('you are not allowed!')
        }
    }

    async updateMovie(req, res) {
        if(req.user.isAdmin) {
            try{
                const { id } = req.params;
                const {
                    title, desc, img,
                    imgTitle, imgSmall, trailer,
                    video, year, limit,
                    genres, isSeries, ratings } = req.body;

                const findMovieById = await Movie.findOne({
                    where: {
                        id: req.params.id
                    }
                });
                if (!findMovieById) {
                    res.status(404).send({
                        status: 'error',
                        message: `Movie with id ${id} not found`
                    });
                }
                if (title) findMovieById.title = title;
                if (desc) findMovieById.desc = desc;
                if (img) findMovieById.img = img;
                if (imgTitle) findMovieById.imgTitle = imgTitle;
                if (imgSmall) findMovieById.imgSmall = imgSmall;
                if (trailer) findMovieById.trailer = trailer;
                if (video) findMovieById.video = video;
                if (year) findMovieById.year = year;
                if (limit) findMovieById.limit = limit;
                if (genres) findMovieById.genres = genres;
                if (isSeries) findMovieById.isSeries = isSeries;
                if (ratings) findMovieById.ratings = ratings;

                const update = await findMovieById.update(req.body, {
                    where: {
                        id: req.params.id
                    }
                })
                const updateMovie = await update.save();
                if (!updateMovie) {
                    res.status(400).send({
                        status: 'error',
                        message: `data movie with id ${id} failed update`
                    });
                }
                res.status(200).send({
                    status: 'success',
                    data: updateMovie
                });
            } catch (err) {
                res.status(500).json(err, 'something went wrong')
            }
        }
    }

    async deleteMovie(req, res) {
        try{
            if(req.user.isAdmin) {
                const {id} = req.params
                if (!id)
                    return res.status(422).send({ message: "Missing Movie id in parameters" });`checking in db too`;
                const movie = await Movie.findByPk(id);
                if (movie.length === 0) {
                    return res.status(422).send({ message: "Movie id not exist" });
                }else {
                    await Movie.destroy({
                        where: {id: req.params.id}
                    })
                }
                return res.status(201).send({ message: "Movie deleted successfully" });
            }
        }catch (err) {
            res.status(500).json(err)
        }
    };

    async getOneMovie(req, res) {
        let id = req.params.id
        let movie = await Movie.findOne({ where: { id: id }})
        res.status(200).send(movie)
    }

    async getAllMovies(req, res) {
        let movies = await Movie.findAll({})
        res.status(200).send(movies)
    }
}

module.exports = new MovieController();