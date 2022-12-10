const router = require('express').Router();
const {createTypeMovie} = require('../controllers/typeMovie.controller');
const verify = require('../middleware/verify');

router.post('/', verify, createTypeMovie);

module.exports = router;