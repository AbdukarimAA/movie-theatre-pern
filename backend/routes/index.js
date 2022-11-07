const Router = require('express');
const router = new Router();
const userRouter = require('./user.router')
const filmCompanyRouter = require('./filmCompany.router')
const actorRouter = require('./actor.router')
const movieRouter = require('./movie.router')


router.use('/user', userRouter)
// router.use('/movie', movieRouter)
// router.use('/actor', actorRouter)
// router.use('/filmCompany', filmCompanyRouter)


module.exports = router;