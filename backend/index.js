require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors')
const verify = require('./middleware/verifyTokenMiddleware');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/auth.router'));
app.use('/api/user', require('./routes/user.router'));
app.use('/api/movie', require('./routes/movie.router'));
app.use('/api/actor', require('./routes/actor.router'));
app.use('/api/filmCompany', require('./routes/filmCompany.router'));
app.use('/api/comment', require('./routes/comments.router'));
app.use('/api/rating', require('./routes/rating.router'));

const start = async () => {
  try{
    await sequelize.authenticate(); // connect to db
    await sequelize.sync(/*{force: true}*/); //сверяет состояние бд со схемой бд
    app.listen(PORT, (req, res) => {console.log('server has started', {PORT})}
    )
  } catch (e){
      console.log('something went wrong', e)
  }
};

start();