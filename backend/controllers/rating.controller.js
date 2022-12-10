const {Rating} = require('../models/models');

class RatingController {
    async create(req, res) {
        const {rate, userId, movieId} = req.body;
        try {
            const rating = await Rating.create({rate, userId, movieId}); //userId movieId ПЕРЕДАТЬ
            await rating.save();
            return res.json(rating)
        } catch (e) {
            return res.status(500).json(e, 'you are not allowed')
        }
    }
}

module.exports = new RatingController();