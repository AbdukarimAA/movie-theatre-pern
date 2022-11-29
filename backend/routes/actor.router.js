const router = require('express').Router();
const {create, getAll, getOne, deleteActor, updateActor} = require('../controllers/actor.controller')
const verify = require('../middleware/verify');

router.post('/', verify, create);
router.put('/updateActor/:id', verify, updateActor)
router.get('/allActors', verify, getAll);
router.get('/oneActor/:id', verify, getOne);
router.delete('/deleteActor/:id', verify, deleteActor)

module.exports = router;