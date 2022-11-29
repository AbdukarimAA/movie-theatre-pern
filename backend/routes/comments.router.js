const router = require('express').Router();
const {create, deleteComment} = require('../controllers/comments.controller')
const verify = require('../middleware/verify');

router.post('/', create)
router.delete('/deleteComment/:id', verify, deleteComment)

module.exports = router;