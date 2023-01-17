const router = require('express').Router();
const {update, remove, getAllUsers, getOneUser, changePassword} = require('../controllers/user.controller');
const verify = require('../middleware/verify');
const checkRole = require('../middleware/checkRoleMiddleware');

router.put('/update/:id', verify, update);
router.put('/changePassword/:id', changePassword);
router.get('/allUsers', checkRole('ADMIN'), getAllUsers);
router.get('/oneUser/:id', checkRole('ADMIN'), getOneUser);
router.delete('/delete/:id', checkRole('ADMIN'), remove);

module.exports = router;