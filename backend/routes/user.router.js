const router = require('express').Router();
const { login, registration } = require('../controllers/user.controllers')
const {verify} = require('../verifyToken');

router.post('/registration', registration);
router.post('/login', login)
// router.post('/login', userController.login);
 // router.put('/:id', verify, userController.update);


module.exports = router;