const router = require('express').Router();
const {create, getAll} = require('../controllers/genre.controller')
const verify = require('../middleware/verify');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', verify, create);
router.get('/getAllGenres', checkRole('ADMIN'), getAll);
// router.put('/updateRating/:id', verify,)
module.exports = router;