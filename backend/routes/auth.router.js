const router = require('express').Router();
const { login, registration, authCheck } = require('../controllers/auth.controller')
const verify = require('../middleware/verifyTokenMiddleware');
const verifyToken = require('../middleware/verifyTokenMiddleware');

router.post('/registration', registration);
router.post('/login', login)
router.get('/check', verifyToken, authCheck)


module.exports = router;