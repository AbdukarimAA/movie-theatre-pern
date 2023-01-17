const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {User} = require("../models/models");

class UserController {
    async update(req, res) {
        if(req.user.IsAdmin === 'ADMIN') {
            try {
                const { id } = req.params;
                const { username, email, IsAdmin, ProfilePic } = req.body;
                const findPersonById = await User.findOne({
                    where: {
                        id: req.params.id
                    }
                });
                if (!findPersonById) {
                    return res.status(404).send({
                        status: 'error',
                        message: `Person with id ${id} not found`
                    });
                }
                // if (username) findPersonById.username = username;
                // if (email) findPersonById.email = email;
                // if (IsAdmin) findPersonById.IsAdmin = IsAdmin;
                // if (ProfilePic) findPersonById.ProfilePic = ProfilePic;

                const update = await findPersonById.update(req.body, {
                    where: {
                        id: req.params.id,
                    }
                })
                const updatePerson = await update.save();
                if (!updatePerson) {
                    return res.status(400).send({
                        status: 'error',
                        message: `data person with id ${id} failed update`
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    data: updatePerson
                });
            } catch (err) {
                return res.status(500).json({err: "something went wrong with user updating"})
            }
        }else {
            return res.status(500).json({message: 'you are not allowed!'})
        }
    }

    async remove(req, res) {
        try {
            const {id} = req.params
            if (!id)
                return res.status(422).send({ message: "Missing User id in parameters" });`checking in db too`;
            const us = await User.findByPk(id);
            if (us.length === 0) {
                return res.status(422).send({ message: "User id not exist" });
            }else {
                await User.destroy({
                    where: {id: req.params.id}
                })
            }
            return res.status(201).send({ message: "User deleted successfully" });
        }catch (err) {
            res.status(500).json({err: "something went wrong with user removing"})
        }

        // try {
        //     if (req.user.id === req.params.id || req.user.isAdmin) {
        //         try {
        //             const user = await User.destroy({
        //                 truncate: true,
        //             });
        //             res.status(200).json("User has been deleted...", {user});
        //         } catch (err) {
        //             res.status(500).json(err);
        //         }
        //     } else {
        //         res.status(403).json("You can delete only your account!");
        //     }
        // }catch (e) {
        //     console.log(e)
        // }
    }

    async getAllUsers(req, res) {
        let users = await User.findAll({})
        res.status(200).send({users})
    }

    async getOneUser(req, res) {
        let id = req.params.id
        let user = await User.findOne({ where: { id: id }})
        const aToken = await jwt.sign(
            { id: user.id, username: user.username, email: user.email, isAdmin: user.IsAdmin, profilePic: user.ProfilePic },
            process.env.SECRET_KEY,
            { expiresIn: '24h' }
        )
        res.status(200).send({user, aToken})
    }

    async changePassword(req, res) {
        const userId = req.params.id;
        const { password } = req.body;

        if(!password) {
            res.json('Something went wrong');
        }else if (password !== undefined) {
            bcrypt.hash(password, 7).then((hash) => {
                User.update({
                    password: hash,
                }, { where: {id: userId} });
                res.json('User\'s password updated successfully');
            })
        }
    }
}


module.exports = new UserController();
