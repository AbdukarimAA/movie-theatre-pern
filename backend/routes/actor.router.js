const router = require('express').Router();
const {create, getAll, getOne, deleteActor, updateActor} = require('../controllers/actor.controller')
const verify = require('../middleware/verify');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', verify, create);
router.put('/updateActor/:id', verify, updateActor)
router.get('/allActors', checkRole('ADMIN'), getAll);
router.get('/oneActor/:id', checkRole('ADMIN'), getOne);
router.delete('/deleteActor/:id', verify, deleteActor)

module.exports = router;