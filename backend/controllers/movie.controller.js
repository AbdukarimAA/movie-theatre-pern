const {Movie, Actor} = require("../models/models");
const jwt = require("jsonwebtoken");
const path = require('path');
const uuid = require('uuid')

class MovieController {
    async createMovie(req, res) {
        if(req.user.isAdmin) {
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
                return res.json(movie)
            } catch (err) {
                return res.status(500).json(err, 'you are not allowed')
            }
        } else {
            return res.status(500).json({message: 'you are not allowed!'})
        }
    }

    async updateMovie(req, res) {
        if(req.user.isAdmin) {
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
                // if (title) findMovieById.title = title;
                // if (desc) findMovieById.desc = desc;
                // if (img) findMovieById.img = img;
                // if (imgTitle) findMovieById.imgTitle = imgTitle;
                // if (imgSmall) findMovieById.imgSmall = imgSmall;
                // if (trailer) findMovieById.trailer = trailer;
                // if (video) findMovieById.video = video;
                // if (year) findMovieById.year = year;
                // if (limit) findMovieById.limit = limit;
                // if (genres) findMovieById.genres = genres;
                // if (isSeries) findMovieById.isSeries = isSeries;
                // if (ratings) findMovieById.ratings = ratings;
                // if (filmCompanyId) findMovieById.filmCompanyId = filmCompanyId;

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
                return res.status(500).json(err, 'something went wrong')
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
        const {id} = req.params
        const movie = await Movie.findOne(
            {
                where: {id},
                include: /*[{model: MovieInfo, as: 'info'},]*/ Actor
            },
        )
        return res.json(movie)
    }

    async getAllMovies(req, res) {
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
    }
}

module.exports = new MovieController();