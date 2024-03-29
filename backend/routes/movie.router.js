const router = require('express').Router();
const {createMovie, updateMovie, deleteMovie, getAllMovies, getOneMovie} = require('../controllers/movie.controller');
const verify = require('../middleware/verify');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', createMovie);
router.put('/updateMovie/:id', verify, updateMovie);
router.delete('/deleteMovie/:id', verify, deleteMovie);
router.get('/getOneMovie/:id', verify, getOneMovie);
router.get('/getAllMovies', verify, getAllMovies);

module.exports = router;