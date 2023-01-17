const router = require('express').Router();
const {create, getAll, getOne} = require('../controllers/filmCompany.controller')
const verify = require('../middleware/verify');
const checkRole = require('../middleware/checkRoleMiddleware');


router.post('/', verify, create);
router.get('/getAllMovies', checkRole('ADMIN'), getAll);
router.get('/getOneMovie/:id', checkRole('ADMIN'), getOne);

module.exports = router;