const router = require('express').Router();
const {update, remove, getAllUsers, getOneUser, changePassword} = require('../controllers/user.controller');
const verify = require('../middleware/verify');

router.put('/update/:id', verify, update);
router.put('/changePassword/:id', changePassword);
router.get('/allUsers', getAllUsers);
router.get('/oneUser/:id', getOneUser);
router.delete('/delete/:id', remove);

module.exports = router;