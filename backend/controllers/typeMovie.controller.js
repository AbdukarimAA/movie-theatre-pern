const {TypeMovieInfo} = require("../models/models");

class TypeMovieController {
    async createTypeMovie(req, res) {
        if(req.user.isAdmin === 'ADMIN'){
            try {
                  const {movieId, actorId} = req.body;
                  const typeMovie = await TypeMovieInfo.create({movieId, actorId})
                  await typeMovie.save();
                  return res.json(typeMovie);
            }catch (e) {
                return res.status(500).json({err: "something went wrong with type movie creating"})
            }
        } else {
            return res.status(500).json({message: 'you are not allowed!'})
        }
    }
}

module.exports = new TypeMovieController();