const router = require('express').Router();
const {update, remove} = require('../controllers/user.controller');
const verify = require('../middleware/verifyTokenMiddleware');
const tok = require('../middleware/verify');

router.put('/:id', tok, update);
router.delete('/delete/:id', tok, remove);

module.exports = router;