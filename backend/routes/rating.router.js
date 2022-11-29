const router = require('express').Router();
const {create} = require('../controllers/rating.controller')
const verify = require('../middleware/verify');

router.post('/', verify, create);
// router.put('/updateRating/:id', verify,)
module.exports = router;