const router = require('express').Router();
<<<<<<< HEAD
const {create, getAll} = require('../controllers/genre.controller')
const verify = require('../middleware/verify');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', verify, create);
router.get('/getAllGenres', checkRole('ADMIN'), getAll);
=======
const {create} = require('../controllers/genre.controller')
const verify = require('../middleware/verify');

router.post('/', verify, create);
>>>>>>> 946e8d9850daba3e7e1eea1bbe31d3f2b37e09e0
// router.put('/updateRating/:id', verify,)
module.exports = router;