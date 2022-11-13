const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {User} = require("../models/models");

class UserController {
    async update(req, res) {
            // try {
            //     if(req.body.password) {
            //         req.body.password = bcrypt.hash(req.body.password, 6)
            //     }
            //         const {id} = req.user
            //         const us = await User.findByPk(id);
            //         const updateUser = await User.update(
            //             {
            //                 username: req.body,
            //             },
            //             {
            //                 where: { id: us },
            //             });
            //         return res.status(200).json(...updateUser)
            // }catch(err) {
            //     res.status(500).json(err)
            // }

            try {
                const {id} = req.params
                // if (!id)
                //     return res.status(422).send({ message: "Missing User id in parameters" });`checking in db too`;
                // const us = await User.findByPk(id);
                //
                // if (us.length === 0) {
                //     return res.status(422).send({ message: "User id not exist" });
                // }else {
                //     await User.update(
                //         {username: req.body.username},
                //         {where: {id: req.params.id}})
                // }

                const job = await User.findOne({where: {id, ownerId: req.user.id}});
                if (!job) {
                    return res.status(422).send({ message: "Missing User id in parameters" });
                }

                job.username = input.username;
                await job.save();
                // return res.status(201).send({ message: "User updated successfully", user})

        // try {
        //     const { id } = req.params;
        //     const { username, email } = req.body;
        //     const findUserById = await User.findOne({
        //         where: {
        //             id
        //         }
        //     });
        //     if (!findUserById) {
        //         res.status(404).json({
        //             status: 'error',
        //             message: `Person with id ${id} not found`
        //         });
        //     }
        //     if (email) findUserById.email = email;
        //     if (username) findUserById.username = username;
        //
        //     const updateUser = await findUserById.save();
        //     if (!updateUser) {
        //         res.status(400).json({
        //             status: 'error',
        //             message: `data person with id ${id} failed update`
        //         });
        //     }
        //     return res.status(201).send({ message: "User updated successfully", updateUser})
        //
         } catch (err) {
            res.status(500).json(err, 'something went wrong')
        }
    }

    async remove(req, res) {
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
        try {
            const {id} = req.user
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
            res.status(500).json(err)
        }
    }
}


module.exports = new UserController();
