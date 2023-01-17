<<<<<<< HEAD
const {Genre, FilmCompany} = require('../models/models');

class GenreController {
    async create(req, res) {
        if(req.user.isAdmin === 'ADMIN') {
            const {name, movieId} = req.body;
            try {
                const genre = await Genre.create({name}); //userId movieId ПЕРЕДАТЬ
                await genre.save();
                return res.json(genre)
            } catch (e) {
                return res.status(500).json({e: "you sre not allowed"})
            }
        } else {
            return res.status(400).json({message: "You are not authorized"})
        }
    }

    async getAll(req, res) {
        const genres = await Genre.findAll()
        return res.json(genres)
    }
=======
const {Genre} = require('../models/models');

class GenreController {
    async create(req, res) {
        const {name, movieId} = req.body;
        try {
            const genre = await Genre.create({name}); //userId movieId ПЕРЕДАТЬ
            await genre.save();
            return res.json(genre)
        } catch (e) {
            return res.status(500).json(e, 'you are not allowed')
        }
    }
>>>>>>> 946e8d9850daba3e7e1eea1bbe31d3f2b37e09e0
}
module.exports = new GenreController();