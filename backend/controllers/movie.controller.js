const {Movie, Actor, Rating, User} = require("../models/models");
const jwt = require("jsonwebtoken");
const path = require('path');
const uuid = require('uuid')
const {where} = require("sequelize");

class MovieController {
    async createMovie(req, res) {
        try{
            let {title, desc, year, limit, genres, isSeries, ratings, director, country, filmCompanyId, genreId } = req.body;
            const {img, imgTitle, imgSmall, trailer, video} = req.files;

            let imgName = uuid.v4() + ".jpg";
            let imgTit = uuid.v4() + ".jpg";
            let imgSm = uuid.v4() + ".jpg";
            let trail = uuid.v4() + ".mp4";
            let film_video = uuid.v4() + ".mp4";

            await img.mv(path.resolve(__dirname, '..', 'files', 'image', imgName));
            await imgTitle.mv(path.resolve(__dirname, '..', 'files', 'imageTitle', imgTit));
            await imgSmall.mv(path.resolve(__dirname, '..', 'files', 'imageSmall', imgSm));
            await trailer.mv(path.resolve(__dirname, '..', 'files', 'trailer', trail));
            await video.mv(path.resolve(__dirname, '..', 'files', 'filmVideo', film_video));

            const movie = await Movie.create({
                title, desc, year, limit, genres, isSeries, ratings, director, country, filmCompanyId, genreId,
                img: imgName, imgTitle: imgTit, imgSmall: imgSm, trailer: trail, video: film_video
            });

            await movie.save();
            return res.json({movie: movie})
        } catch (err) {
            return res.status(400).json(err)
        }
    }

    async updateMovie(req, res) {
        if(req.user.isAdmin === 'ADMIN') {
            try{
                const { id } = req.params;
                let {title, desc, year, limit, genres, isSeries, ratings, filmCompanyId, genreId, act} = req.body;

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

                const update = await findMovieById.update(req.body, {
                    where: {
                        id: req.params.id
                    }
                })
                const updateMovie = await update.save();
                if (!updateMovie) {
                    return res.status(400).send({
                        status: 'error',
                        message: `data movie with id ${id} failed update`
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    data: updateMovie
                });
            } catch (err) {
                return res.status(500).json({err: "something went wrong with film updating"})
            }
        }
    }

    async deleteMovie(req, res) {
        try{
            if(req.user.isAdmin === 'ADMIN') {
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
            res.status(500).json({err: "something went wrong with film deleting"})
        }
    };

    async getOneMovie(req, res) {
        const {id} = req.params
        const movie = await Movie.findOne(
            {
                where: {id},
                include: Actor
            },
        )
        return res.json(movie)
    }

    async getAllMovies(req, res) {
        try {
            let {genreId, filmCompanyId, page, lim} = req.query
            let movies;
            page = page || 1
            lim = lim || 10;
            let offset = page * lim - lim
            if(!genreId && filmCompanyId) {
                movies = await Movie.findAndCountAll({where: {filmCompanyId}, lim, offset, include: Actor})
            }
            if(genreId && !filmCompanyId) {
                movies = await Movie.findAndCountAll({where: {genreId}, lim, offset, include: Actor})
            }
            if(!genreId && !filmCompanyId) {
                movies = await Movie.findAndCountAll({lim, offset, include: Actor})
            }
            if(genreId && filmCompanyId) {
                movies = await Movie.findAndCountAll({where: {genreId, filmCompanyId}, lim, offset, include: Actor})
            }

            return res.status(200).send(movies)
        } catch (e) {
            res.status(500).json({err: "something went wrong with getting all films"})
        }
    }
}

module.exports = new MovieController();