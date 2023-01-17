const {Comment} = require('../models/models')

class CommentController {
    async create(req, res) {
        try {
            const {comment, userId, movieId} = req.body;
            const comm = await Comment.create({comment, userId, movieId}); //userId movieId ПЕРЕДАТЬ
            await comm.save();
            return res.json(comm)
        }catch (e) {
            res.status(400).json({message: "Error", e})
        }
    }

    async deleteComment(req, res) {
        try{
            if(req.user.isAdmin) {
                const {id} = req.params
                if (!id)
                    return res.status(422).send({ message: "Missing Comment id in parameters" });`checking in db too`;
                const comm = await Comment.findByPk(id);
                if (comm.length === 0) {
                    return res.status(422).send({ message: "Comment id not exist" });
                }else {
                    await Comment.destroy({
                        where: {id: req.params.id}
                    })
                }
                return res.status(201).send({ message: "Comment deleted successfully" });
            }
        }catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = new CommentController();