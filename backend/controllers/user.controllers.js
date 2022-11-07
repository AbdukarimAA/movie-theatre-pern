const {User} = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const e = require("express");
const {where} = require("sequelize");

const registration = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 5)
    const newUser = await new User({
        username: req.body.username,
        // email: req.body.email,
        password: hashedPassword,
    });
    try {
        await newUser.save();
        res.status(201).json(newUser)

    }catch (err){
        res.status(500).json(err)
    }
};

class UserController {
    async login(req, res) {
        try {
            const {username} = req.body
            const user = await User.findOne({ username })
            if (!user) {
                return res.status(400).json({ message: 'wrong email or ты хуйло' })
            }

            const aToken = await jwt.sign(
                { id: user._id, isAdmin: user.isAdmin },
                process.env.SECRET_KEY,
                { expiresIn: '24h' }
            )

            res.status(200).json({ user, aToken })
        } catch (e) {
            res.status(400).json({message: 'Something went wrong...'})
        }
    }
}

module.exports = new UserController()

// const login = async (res, req) => {
//     try {
//         const {username} = req.body
//         const user = await User.findOne({ username })
//         if (!user) {
//             return res.status(400).json({ message: 'wrong email or ты хуйло' })
//         }
//
//         const aToken = await jwt.sign(
//             { id: user._id, isAdmin: user.isAdmin },
//             process.env.SECRET_KEY,
//             { expiresIn: '24h' }
//         )
//
//         res.status(200).json({ user, aToken })
//     } catch (e) {
//         res.status(400).json({message: 'Ты'})
//     }
// }

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

// const generateJWT = (id, username) => {
//     jwt.sign(
//         {id, username, ProfilePic, IsAdmin},
//         process.env.SECRET_KEY,
//         {expiresIn: '20h'}
//     );
// }
//
//
// const registration = async (req, res, next) => {
//         const {id, username, password} = req.body;
//         if(!username || !password) {
//             return console.error('error! there is no us or ps');
//         }
//         const candidate = await User.findOne({where: {username}});
//         if(candidate) {
//             return console.error('user already exists')
//         }
//         const hashPassword = await bcrypt.hash(password, 6);
//         const user = await User.create({id, username, password: hashPassword})
//         const comment = await Comment.create({userId: user.id})
//         const token = generateJWT(user.id, user.username)
//         return res.json({token});
//     }


module.exports = {
    registration,
    // login,
    //update,
};
