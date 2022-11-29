const router = require('express').Router();
const {create, getAll, getOne} = require('../controllers/filmCompany.controller')
const verify = require('../middleware/verify');


router.post('/', verify, create);
router.get('/getAllMovies', getAll);
router.get('/getOneMovie/:id', getOne);

module.exports = router;