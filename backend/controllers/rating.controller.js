const {Rating} = require('../models/models');

class RatingController {
    async create(req, res) {
        const {rate} = req.body;
        try {
            const rating = await Rating.create({rate}); //userId movieId ПЕРЕДАТЬ
            await rating.save();
            return res.json(rating)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new RatingController();