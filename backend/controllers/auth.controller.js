const {User} = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const e = require("express");
const verify = require('../middleware/verifyTokenMiddleware');

class AuthController {
    async registration(req, res) {
        // try {
        //     const hashedPassword = await bcrypt.hash(req.body.password, 5)
        //     const newUser = await User.create({
        //     username: req.body.username,
        //     // email: req.body.email,
        //     password: hashedPassword});
        //
        //     await newUser.save();
        //     res.status(201).json(newUser)
        //
        // }catch (err){
        //     res.status(500).json(err)
        // }
        const {username, email, IsAdmin, ProfilePic, password} = req.body
        if (!email || !password) {
            console.log('err')
        }
        const candidate = await User.findOne({where: {email: email} })
        if (candidate) {
            console.log('err')
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({username, email, IsAdmin, ProfilePic, password: hashPassword})
        await user.save();
        const aToken = await jwt.sign(
            { id: user.id, username: user.username, email: user.email, isAdmin: user.IsAdmin, profilePic: user.ProfilePic },
            process.env.SECRET_KEY,
            { expiresIn: '24h' }
        )
        return res.json(aToken)
    };

    async login(req, res) {
        // try {
        //     const {username} = req.body
        //     const user = await User.findOne({ username })
        //     if (!user) {
        //         return res.status(400).json({ message: 'wrong email or password' })
        //     }
        //
        //     const aToken = await jwt.sign(
        //         { id: user.id, isAdmin: user.isAdmin },
        //         process.env.SECRET_KEY,
        //         { expiresIn: '24h' }
        //     )
        //
        //     res.status(200).json({ user, aToken })
        // } catch (e) {
        //     res.status(400).json({message: 'Something went wrong...'})
        // }
        const {username, email, password} = req.body
        console.log(email)
        const user = await User.findOne({where: {email}})
        if (!user) {
            return res.status(400).json({ message: 'wrong email or password' })
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            console.log('err')
        }
        const aToken = await jwt.sign(
            { id: user.id, username: user.username, email: user.email, isAdmin: user.isAdmin },
            process.env.SECRET_KEY,
            { expiresIn: '24h' }
        )
        return res.json({user, aToken})
    }

    async authCheck(req, res, next) {
        const aToken = await jwt.sign(
            { id: req.id, username: req.username, email: req.email, isAdmin: req.isAdmin },
            process.env.SECRET_KEY,
            { expiresIn: '24h' }
        )
        return res.json({aToken})
    }
}

module.exports = new AuthController()

// update
// const update = async (req, res) => {
//     if(req.user.id === req.params.id || req.user.isAdmin) {
//         if(req.body.password) {
//             req.body.password = bcrypt.hash(req.body.password, 6)
//         }
//         try {
//             const updateUser = await User.findByIdAndUpdate(req.params.id, {
//                 $set: req.body
//             }, {
//                 new: true
//             });
//             res.status(200).json(updateUser)
//         }catch(err) {
//             res.status(500).json(err)
//         }
//     }else {
//         res.status(403).json('you can only update your account')
//     }
// };
//delete
//get
//getAll
//getUserStats for admin