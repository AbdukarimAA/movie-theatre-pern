const {TypeMovieInfo} = require("../models/models");

class TypeMovieController {
    async createTypeMovie(req, res) {
        if(req.user.isAdmin){
            try {
                  const {movieId, actorId} = req.body;
                  const typeMovie = await TypeMovieInfo.create({movieId, actorId})
                  await typeMovie.save();
                  return res.json(typeMovie);
            }catch (e) {
                return res.status(500).json(e, 'you are not allowed')
            }
        } else {
            return res.status(500).json({message: 'you are not allowed!'})
        }
    }
}

module.exports = new TypeMovieController();