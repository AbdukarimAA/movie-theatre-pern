const {TypeMovieInfo} = require("../models/models");

class TypeMovieController {
    async createTypeMovie(req, res) {
<<<<<<< HEAD
        if(req.user.isAdmin === 'ADMIN'){
=======
        if(req.user.isAdmin){
>>>>>>> 946e8d9850daba3e7e1eea1bbe31d3f2b37e09e0
            try {
                  const {movieId, actorId} = req.body;
                  const typeMovie = await TypeMovieInfo.create({movieId, actorId})
                  await typeMovie.save();
                  return res.json(typeMovie);
            }catch (e) {
<<<<<<< HEAD
                return res.status(500).json({err: "something went wrong with type movie creating"})
=======
                return res.status(500).json(e, 'you are not allowed')
>>>>>>> 946e8d9850daba3e7e1eea1bbe31d3f2b37e09e0
            }
        } else {
            return res.status(500).json({message: 'you are not allowed!'})
        }
    }
}

module.exports = new TypeMovieController();