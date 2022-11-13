const router = require('express').Router();
const { login, registration, authCheck } = require('../controllers/auth.controller')
const verify = require('../middleware/verifyTokenMiddleware');


router.post('/registration', registration);
router.post('/login', login)
router.get('/check', verify, authCheck)


module.exports = router;