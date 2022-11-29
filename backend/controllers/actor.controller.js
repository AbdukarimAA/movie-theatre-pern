const {Actor} = require('../models/models')

class ActorController {
    async create(req, res) {
        if(req.user.isAdmin) {
            const {name, actorInfo} = req.body;
            try {
                const actor = await Actor.create({name, actorInfo});
                await actor.save();
                return res.json(actor)
            } catch (e) {
                console.log(e)
            }
        } else {
            res.status(500).json('you are not allowed!')
        }
    }

    async updateActor(req, res) {
        try {
            if(req.user.isAdmin) {
                const { id } = req.params;
                const { name, actorInfo } = req.body;
                const findActorById = await Actor.findOne({
                    where: {
                        id: req.params.id
                    }
                });
                if (!findActorById) {
                    res.status(404).send({
                        status: 'error',
                        message: `Actor with id ${id} not found`
                    });
                }
                if (name) findActorById.name = name;
                if (actorInfo) findActorById.actorInfo = actorInfo;

                const update = await findActorById.update(req.body, {
                    where: {
                        id: req.params.id
                    }
                })
                const updateActor = await update.save();
                if (!updateActor) {
                    res.status(400).send({
                        status: 'error',
                        message: `data actor with id ${id} failed update`
                    });
                }
                res.status(200).send({
                    status: 'success',
                    data: updateActor
                });
            }else {
                res.status(400).json({message: "You are not authorized"})
            }
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        const actors = await Actor.findAll()
        return res.json(actors)
    }

    async getOne(req, res) {
        let id = req.params.id
        let actor = await Actor.findOne({ where: { id: id }})
        res.status(200).send(actor)
    }

    async deleteActor(req, res) {
        try{
            if(req.user.isAdmin) {
                const {id} = req.params
                if (!id)
                    return res.status(422).send({ message: "Missing Actor id in parameters" });`checking in db too`;
                const actor = await Actor.findByPk(id);
                if (actor.length === 0) {
                    return res.status(422).send({ message: "Actor id not exist" });
                }else {
                    await Actor.destroy({
                        where: {id: req.params.id}
                    })
                }
                return res.status(201).send({ message: "Actor deleted successfully" });
            }
        }catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = new ActorController();