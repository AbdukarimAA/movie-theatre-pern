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
}
module.exports = new GenreController();